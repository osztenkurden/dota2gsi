import { PlayerExtension, TeamExtension } from './interfaces';
import {
	Dota2Raw,
	PlayerRaw,
	HeroRaw,
	PlayerKeys,
	PlayerKey,
	RadiantPlayerIds,
	DirePlayerIds,
	TeamBuildingsKeys,
	BuildingInfo
} from './dota2';
import {
	Dota2,
	Player,
	Hero,
	Faction,
	Side,
	AttackType,
	Building,
	BuildingType,
	MapSides,
	Provider,
	Team,
	Ability,
	Item,
	ItemType,
	DraftEntry,
	TeamDraft,
	Draft,
	Wearable,
	WearableType,
	KillEntry,
	Map as DotaMap
} from './parsed';
import { parseBuilding, parseDraft, parseMap, parsePlayer } from './utils.js';

interface Events {
	data: (data: Dota2) => void;
	newListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => void;
	removeListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => void;
}

type EventNames = keyof Events;
interface EventDescriptor {
	listener: Events[EventNames];
	once: boolean;
}
class DOTA2GSI {
	private descriptors: Map<EventNames, EventDescriptor[]>;
	private maxListeners: number;
	teams: {
		radiant: TeamExtension | null;
		dire: TeamExtension | null;
	};
	players: PlayerExtension[];
	last?: Dota2;
	constructor() {
		this.descriptors = new Map();
		this.teams = {
			radiant: null,
			dire: null
		};
		this.maxListeners = 10;
		this.players = [];
	}
	eventNames = () => {
		const listeners = this.descriptors.entries();
		const nonEmptyEvents: EventNames[] = [];

		for (const entry of listeners) {
			if (entry[1] && entry[1].length > 0) {
				nonEmptyEvents.push(entry[0]);
			}
		}

		return nonEmptyEvents;
	};
	getMaxListeners = () => this.maxListeners;

	listenerCount = (eventName: EventNames) => {
		const listeners = this.listeners(eventName);
		return listeners.length;
	};

	listeners = (eventName: EventNames) => {
		const descriptors = this.descriptors.get(eventName) || [];
		return descriptors.map(descriptor => descriptor.listener);
	};

	removeListener = <K extends EventNames>(eventName: K, listener: Events[K]) => {
		return this.off(eventName, listener);
	};

	off = <K extends EventNames>(eventName: K, listener: Events[K]) => {
		const descriptors = this.descriptors.get(eventName) || [];

		this.descriptors.set(
			eventName,
			descriptors.filter(descriptor => descriptor.listener !== listener)
		);
		this.emit('removeListener', eventName, listener);
		return this;
	};

	addListener = <K extends EventNames>(eventName: K, listener: Events[K]) => {
		return this.on(eventName, listener);
	};

	on = <K extends EventNames>(eventName: K, listener: Events[K]) => {
		this.emit('newListener', eventName, listener);
		const listOfListeners = [...(this.descriptors.get(eventName) || [])];

		listOfListeners.push({ listener, once: false });
		this.descriptors.set(eventName, listOfListeners);

		return this;
	};

	once = <K extends EventNames>(eventName: K, listener: Events[K]) => {
		const listOfListeners = [...(this.descriptors.get(eventName) || [])];

		listOfListeners.push({ listener, once: true });
		this.descriptors.set(eventName, listOfListeners);

		return this;
	};

	prependListener = <K extends EventNames>(eventName: K, listener: Events[K]) => {
		const listOfListeners = [...(this.descriptors.get(eventName) || [])];

		listOfListeners.unshift({ listener, once: false });
		this.descriptors.set(eventName, listOfListeners);

		return this;
	};

	emit = (eventName: EventNames, arg?: any, arg2?: any) => {
		const listeners = this.descriptors.get(eventName);
		if (!listeners || listeners.length === 0) return false;

		listeners.forEach(listener => {
			if (listener.once) {
				this.descriptors.set(
					eventName,
					listeners.filter(listenerInArray => listenerInArray !== listener)
				);
			}
			(listener.listener as any)(arg, arg2);
		});
		return true;
	};

	prependOnceListener = <K extends EventNames>(eventName: K, listener: Events[K]) => {
		const listOfListeners = [...(this.descriptors.get(eventName) || [])];

		listOfListeners.unshift({ listener, once: true });
		this.descriptors.set(eventName, listOfListeners);

		return this;
	};

	removeAllListeners = (eventName: EventNames) => {
		this.descriptors.set(eventName, []);
		return this;
	};

	setMaxListeners = (n: number) => {
		this.maxListeners = n;
		return this;
	};

	rawListeners = (eventName: EventNames) => {
		return this.descriptors.get(eventName) || [];
	};

	digest = (rawGSI: Dota2Raw) => {
		const rawPlayers: { id: number; player: PlayerRaw }[] = [];

		for (const [key, player] of Object.entries({ ...rawGSI.player.team2, ...rawGSI.player.team3 })) {
			const id = Number(key.replace(/([^0-9])/g, ''));
			if (isNaN(id) || !player) continue;

			rawPlayers.push({ id, player });
		}

		const rawBuildings: { id: TeamBuildingsKeys; building: BuildingInfo }[] = [];

		for (const [id, building] of Object.entries(
			rawGSI.buildings ? { ...rawGSI.buildings.dire, ...rawGSI.buildings.radiant } : {}
		)) {
			if (!building) continue;
			rawBuildings.push({ id: id as TeamBuildingsKeys, building });
		}

		const players = rawPlayers.map(data => parsePlayer(data.player, data.id, rawGSI, this.players));

		const gsi: Dota2 = {
			provider: rawGSI.provider,
			map: parseMap(rawGSI.map, this.teams),
			players,
			player: players.find(player => player.hero && player.hero.selected_unit) || null,
			buildings: rawBuildings.map(entry => parseBuilding(entry.id, entry.building)),
			draft: {
				activeteam: rawGSI.draft.activeteam,
				pick: rawGSI.draft.pick,
				activeteam_time_remaining: rawGSI.draft.activeteam_time_remaining,
				radiant: {
					home_team: rawGSI.draft.team2.home_team,
					bonus_time: rawGSI.draft.radiant_bonus_time,
					picks: parseDraft(rawGSI.draft.team2)
				},
				dire: {
					home_team: rawGSI.draft.team3.home_team,
					bonus_time: rawGSI.draft.dire_bonus_time,
					picks: parseDraft(rawGSI.draft.team3)
				}
			}
		};
		this.emit('data', gsi);
	};
}

export { DOTA2GSI };

export {
	PlayerRaw,
	Dota2Raw,
	Player,
	PlayerExtension,
	TeamExtension,
	Hero,
	HeroRaw,
	PlayerKeys,
	PlayerKey,
	RadiantPlayerIds,
	DirePlayerIds,
	Dota2,
	Faction,
	Side,
	AttackType,
	Ability,
	Building,
	BuildingType,
	ItemType,
	MapSides,
	Team,
	Provider,
	Item,
	Draft,
	DraftEntry,
	TeamDraft,
	Wearable,
	WearableType,
	KillEntry,
	DotaMap as Map
};
