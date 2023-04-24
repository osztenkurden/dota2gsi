import {
	BuildingInfo,
	DirePlayerIds,
	Dota2Raw,
	HeroRaw,
	PlayerKey,
	PlayerKeys,
	PlayerRaw,
	RadiantPlayerIds,
	TeamBuildingsKeys
} from './dota2';
import { MatchEnd, PlayerExtension, TeamExtension } from './interfaces';
import { getItem } from './items_prices.js';
import {
	Ability,
	AttackType,
	Building,
	BuildingType,
	Dota2,
	Map as DotaMap,
	Draft,
	DraftEntry,
	Faction,
	Hero,
	Item,
	ItemType,
	KillEntry,
	KillEvent,
	MapSides,
	Player,
	Provider,
	Side,
	Team,
	TeamDraft,
	Wearable,
	WearableType
} from './parsed';
import { parseBuilding, parseDraft, parseMap, parseNeutralItems, parseOutposts, parsePlayer } from './utils.js';

interface Events {
	data: (data: Dota2) => void;
	kill: (kill: KillEvent) => void;
	matchEnd: (data: MatchEnd) => void;
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
	current?: Dota2;
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
		if (!rawGSI || !rawGSI.map) return null;
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

		const players = rawPlayers.map(data => parsePlayer(data.player, data.id, rawGSI, this.players, this.current));

		const gsi: Dota2 = {
			provider: rawGSI.provider,
			map: parseMap(rawGSI.map, this.teams),
			players,
			player: players.find(player => player.hero && player.hero.selected_unit) || null,
			buildings: rawBuildings.map(entry => parseBuilding(entry.id, entry.building)),
			roshan: rawGSI.roshan,
			neutral_items:
				parseNeutralItems(rawGSI.map.game_time, rawGSI.neutralitems, this.last?.neutral_items || undefined) ||
				null,
			events: rawGSI.events,
			outposts: parseOutposts(rawGSI.minimap),
			draft: {
				activeteam: rawGSI.draft.activeteam,
				pick: rawGSI.draft.pick,
				activeteam_time_remaining: rawGSI.draft.activeteam_time_remaining,
				radiant:
					rawGSI.draft.team2 &&
					'home_team' in rawGSI.draft.team2 &&
					rawGSI.draft.radiant_bonus_time !== undefined
						? {
								home_team: rawGSI.draft.team2.home_team,
								bonus_time: rawGSI.draft.radiant_bonus_time,
								picks: parseDraft(rawGSI.draft.team2)
						  }
						: undefined,
				dire:
					rawGSI.draft.team3 &&
					'home_team' in rawGSI.draft.team3 &&
					rawGSI.draft.dire_bonus_time !== undefined
						? {
								home_team: rawGSI.draft.team3.home_team,
								bonus_time: rawGSI.draft.dire_bonus_time,
								picks: parseDraft(rawGSI.draft.team3)
						  }
						: undefined
			}
		};
		this.current = gsi;

		if (this.last) {
			for (const player of gsi.players) {
				const previousPlayer = this.last.players.find(lastPlayer => lastPlayer.steamid === player.steamid);
				if (!previousPlayer) continue;
				const newKills = player.kill_list.filter(kill => {
					const previousKill = previousPlayer.kill_list.find(oldKill => oldKill.victimid === kill.victimid);
					if (!previousKill) return true;
					return previousKill.amount !== kill.amount;
				});
				for (const killEntry of newKills) {
					const victim = gsi.players.find(player => player.id === killEntry.victimid);
					if (!victim) continue;

					const kill: KillEvent = {
						victim,
						killer: player
					};
					this.emit('kill', kill);
				}
			}
			if (gsi.map.win_team !== 'none' && this.last.map.win_team === 'none') {
				const winTeam = gsi.map.win_team.toLowerCase();
				if (winTeam.includes('dire')) {
					this.emit('matchEnd', {
						faction: 'dire',
						teamId: gsi.map.dire.id,
						name: gsi.map.dire.name
					} as MatchEnd);
				} else {
					this.emit('matchEnd', {
						faction: 'radiant',
						teamId: gsi.map.radiant.id,
						name: gsi.map.radiant.name
					} as MatchEnd);
				}
			}
		}

		this.last = gsi;
		this.emit('data', gsi);
		return gsi;
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
	DotaMap as Map,
	getItem
};
