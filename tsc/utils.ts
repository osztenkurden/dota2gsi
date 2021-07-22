import {
	PlayerRaw,
	Dota2Raw,
	Player,
	PlayerExtension,
	PlayerKeys,
	PlayerKey,
	RadiantPlayerIds,
	DirePlayerIds
} from '.';
import { AbilityRaw, BuildingInfo, ItemRaw, MapRaw, TeamBuildingsKeys, TeamDraftRaw } from './dota2';
import {
	Ability,
	Item,
	Wearable,
	ItemType,
	WearableType,
	BuildingType,
	MapSides,
	TeamExtension,
	Team,
	Map,
	AttackType,
	Building,
	Side,
	Faction
} from './interfaces';
import { DraftEntry } from './parsed';

type RadiantPlayers = PlayerKey<RadiantPlayerIds>;
type DirePlayers = PlayerKey<DirePlayerIds>;

type Attributes = 'abilities' | 'items' | 'wearables';

type AttributeList<T> = T extends 'abilities'
	? Ability
	: T extends 'items'
	? Item
	: T extends 'wearables'
	? Wearable
	: never;

const getPlayersAttibute = <T extends Attributes>(
	playerId: number,
	data: Dota2Raw,
	attribute: T
): AttributeList<T>[] => {
	const identifier = `player${playerId}` as PlayerKeys;

	const attributeSlots =
		data[attribute].team2[identifier as RadiantPlayers] || data[attribute].team3[identifier as DirePlayers];

	if (!attributeSlots) return [] as any[];

	const response = [];

	for (const [key, entry] of Object.entries(attributeSlots)) {
		if (!entry && entry !== 0) continue;

		const id = Number(key.replace(/([^0-9])/g, ''));

		if (isNaN(id)) continue;

		if (attribute === 'abilities') {
			const element: Ability = {
				...(entry as AbilityRaw),
				id
			};
			response.push(element);
		} else if (attribute === 'items') {
			const type = key.replace(/([0-9])/g, '') as ItemType;
			const element: Item = {
				...(entry as ItemRaw),
				type,
				id
			};
			response.push(element);
		} else if (attribute === 'wearables') {
			const type = key.replace(/([0-9])/g, '') as WearableType;
			const element: Wearable = {
				id,
				type,
				value: entry as number
			};
			response.push(element);
		}
	}

	return response as AttributeList<T>[];
};

export const parsePlayer = (basePlayer: PlayerRaw, id: number, data: Dota2Raw, extensions: PlayerExtension[]) => {
	const extension = extensions.find(player => player.steamid === basePlayer.steamid);

	const identifier = `player${id}` as PlayerKeys;

	const targetHero =
		data.hero.team2[identifier as RadiantPlayers] || data.hero.team3[identifier as DirePlayers] || null;
	const player: Player = {
		...basePlayer,
		hero: targetHero,
		abilities: getPlayersAttibute(id, data, 'abilities'),
		items: getPlayersAttibute(id, data, 'items'),
		wearables: getPlayersAttibute(id, data, 'wearables'),
		name: (extension && extension.name) || basePlayer.name,
		country: (extension && extension.country) || null,
		avatar: (extension && extension.avatar) || null,
		extra: (extension && extension.extra) || {},
		realName: (extension && extension.realName) || null,
		kill_list: []
	};

	for (const [key, value] of Object.entries(basePlayer.kill_list)) {
		if (!value) continue;
		const victimid = Number(key.replace(/([^0-9])/g, ''));
		const existingEntry = player.kill_list.find(killEntry => killEntry.victimid === victimid);

		if (!existingEntry) {
			player.kill_list.push({
				victimid,
				amount: value
			});
			continue;
		}
		existingEntry.amount = value;
	}

	return player;
};

export const parseTeam = (map: MapRaw, type: Faction, extension: TeamExtension | null): Team => ({
	ward_purchase_cooldown: map[type === 'dire' ? `dire_ward_purchase_cooldown` : 'radiant_ward_purchase_cooldown'],
	name: (extension && extension.name) || type.toUpperCase(),
	map_score: (extension && extension.map_score) || 0,
	extra: (extension && extension.extra) || {},
	id: (extension && extension.id) || null,
	country: (extension && extension.country) || null,
	logo: (extension && extension.logo) || null
});

export const parseMap = (
	rawMap: MapRaw,
	extensions: { dire: TeamExtension | null; radiant: TeamExtension | null }
): Map => {
	const map: Map = {
		name: rawMap.name,
		matchid: rawMap.matchid,
		game_state: rawMap.game_state,
		game_time: rawMap.game_time,
		clock_time: rawMap.clock_time,
		daytime: rawMap.daytime,
		nightstalker_night: rawMap.nightstalker_night,
		paused: rawMap.paused,
		win_team: rawMap.win_team,
		customgamename: rawMap.customgamename,
		roshan_state: rawMap.roshan_state,
		roshan_state_end_seconds: rawMap.roshan_state_end_seconds,
		radiant_win_chance: rawMap.radiant_win_chance,
		dire: parseTeam(rawMap, 'dire', extensions.dire),
		radiant: parseTeam(rawMap, 'radiant', extensions.radiant)
	};
	return map;
};

export const parseBuilding = (buildingKey: TeamBuildingsKeys, building: BuildingInfo): Building => {
	const side = buildingKey.includes('good') ? 'good' : ('bad' as Side);
	const faction = side === 'good' ? 'radiant' : ('dire' as Faction);
	let attack: AttackType = null;
	let type: BuildingType = 'tower';

	let order: number | null = null;

	if (buildingKey.includes('rax')) {
		type = 'rax';
		attack = buildingKey.includes('melee') ? 'melee' : 'range';
	} else if (buildingKey.includes('fort')) {
		type = 'fort';
	} else {
		const towerNumber = Number(buildingKey.substr(buildingKey.indexOf('tower') + 5, 1));
		if (!isNaN(towerNumber)) {
			order = towerNumber;
		}
	}

	const lastSegment = buildingKey.substring(buildingKey.lastIndexOf('_') + 1);

	const position = ['top', 'bot', 'mid'].includes(lastSegment) ? (lastSegment as MapSides) : null;

	return {
		side,
		faction,
		attack,
		type,
		position,
		number: order,
		...building
	};
};

export const parseDraft = (draft: TeamDraftRaw) => {
	const entries: DraftEntry[] = [];

	const keys = Object.keys(draft).sort();

	for (const key of keys) {
		if (key === 'home_team') continue;

		const order = Number(key.replace(/([^0-9])/g, ''));

		if (isNaN(order)) continue;

		const type = key.startsWith('pick') ? 'pick' : 'ban';

		const value = draft[key as keyof TeamDraftRaw];

		let currentEntry = entries.find(entry => entry.order === order && entry.type === type);
		if (!currentEntry) {
			currentEntry = {
				player_id: 0,
				type,
				class: '',
				order
			};
			entries.push(currentEntry);
		}
		if (key.includes('_id')) {
			currentEntry.player_id = value as number;
		} else {
			currentEntry.class = value as string;
		}
	}

	return entries;
};
