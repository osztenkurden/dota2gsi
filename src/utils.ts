import type {
	AbilityRaw,
	BuildingInfo,
	CourierRaw,
	ItemRaw,
	MapRaw,
	PlayerRaw,
	DirePlayerIds,
	Dota2Raw,
	PlayerKey,
	PlayerKeys,
	RadiantPlayerIds,
	NeutralItemsRaw,
	TeamBuildingsKeys,
	TeamDraftRaw,
	MinimapPoint,
	NeutralItemsInPlayerRaw,
	TeamNeutralItemsRaw,
	TierIds
} from './dota2';
import type {
	Ability,
	AttackType,
	Building,
	BuildingType,
	Faction,
	Item,
	ItemType,
	Map,
	MapSides,
	PlayerExtension,
	Side,
	Team,
	TeamExtension,
	Wearable,
	WearableType
} from './interfaces';
import type { Courier, CourierItem, Dota2, DraftEntry, Hero, NeutralItemInTier, NeutralItems, NeutralItemsInTier, Outposts, Player, TeamNeutralItems } from './parsed';

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

const getPlayersAttribute = <T extends Attributes>(
	playerId: number,
	data: Dota2Raw,
	attribute: T
): AttributeList<T>[] => {
	const identifier = `player${playerId}` as PlayerKeys;

	const attributeSlots =
		data[attribute]?.team2[identifier as RadiantPlayers] || data[attribute]?.team3[identifier as DirePlayers];

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

const getPlayersCourier = (
	id: number,
	couriers: { [courierName: string]: CourierRaw },
	lastCouriers: Courier[],
	team: string
) => {
	for (const courier in couriers) {
		if (!couriers[courier]) continue;
		if (Number(couriers[courier]!.owner) === id) return parseCourier(couriers[courier]!, lastCouriers[id], team);
	}
	return undefined;
};

export const parsePlayer = (
	basePlayer: PlayerRaw,
	id: number,
	data: Dota2Raw,
	extensions: PlayerExtension[],
	lastData?: Dota2
) => {
	const extension = extensions.find(player => player.steamid === basePlayer.steamid);

	const identifier = `player${id}` as PlayerKeys;

	const targetHero =
		(data.hero.team2[identifier as RadiantPlayers] || data.hero.team3[identifier as DirePlayers] || null) as Hero | null;

	if (targetHero && targetHero.facet !== null && targetHero.facet !== undefined) {
		targetHero.facetIndex = targetHero.facet - 1;
	}
	const player: Player = {
		...basePlayer,
		id,
		hero: targetHero,
		abilities: getPlayersAttribute(id, data, 'abilities'),
		items: getPlayersAttribute(id, data, 'items'),
		wearables: getPlayersAttribute(id, data, 'wearables'),
		name: (extension && extension.name) || basePlayer.name,
		defaultName: basePlayer.name,
		country: (extension && extension.country) || null,
		avatar: (extension && extension.avatar) || null,
		extra: (extension && extension.extra) || {},
		realName: (extension && extension.realName) || null,
		courier:
			getPlayersCourier(
				id,
				data.couriers || {},
				lastData ? lastData.players.flatMap(x => (x.courier ? [x.courier] : [])) : [],
				basePlayer.team_name
			) || null,
		kill_list: []
	};

	for (const [key, value] of Object.entries(basePlayer.kill_list || {})) {
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
	logo: (extension && extension.logo) || null,
	short_name: (extension && extension.short_name) || null
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

export const parseCourier = (courier: CourierRaw, lastCourier?: Courier, team?: string): Courier => {
	const items = [];
	for (const item in courier.items) {
		items.push(courier.items[item]!);
	}

	let lostItems: CourierItem[] = [];
	if (!courier.alive && lastCourier) {
		if (!lastCourier.alive) {
			lostItems = lastCourier.lost_items;
		} else {
			lostItems = lastCourier.items;
		}
	}

	return {
		...courier,
		items: items.map(x => ({
			name: x.name,
			owner: Number(x.owner)
		})),
		team: team === undefined ? undefined : team === 'radiant' ? 'radiant' : 'dire',
		owner: Number(courier.owner),
		lost_items: lostItems
	};
};

export const parseOutposts = (minimap?: { [pointName: string]: MinimapPoint }): Outposts => {
	if (!minimap) return {};
	const outposts = Object.values(minimap).filter(x => x.unitname === 'npc_dota_watch_tower');
	const outsideNorth = outposts.find(x => x.ypos > 6000);
	const jungleNorth = outposts.find(x => x.ypos > 0 && x.ypos < 6000);
	const jungleSouth = outposts.find(x => x.ypos > -6000 && x.ypos < 0);
	const outsideSouth = outposts.find(x => x.ypos < -6000);

	return {
		outsideNorth: !(outsideNorth && outsideNorth.team) ? undefined : outsideNorth.team === 2 ? 'radiant' : 'dire',
		jungleNorth: !(jungleNorth && jungleNorth.team) ? undefined : jungleNorth.team === 2 ? 'radiant' : 'dire',
		jungleSouth: !(jungleSouth && jungleSouth.team) ? undefined : jungleSouth.team === 2 ? 'radiant' : 'dire',
		outsideSouth: !(outsideSouth && outsideSouth.team) ? undefined : outsideSouth.team === 2 ? 'radiant' : 'dire'
	};
};

const checkItemTier = (tier: any) => {
	for (const value of ['item0', 'item1', 'item2', 'item3', 'item4']) {
		if (tier[value] === undefined) {
			return false;
		}
	}
	return true;
};

const parseTierIntoOldFormat = (players: NeutralItemsInPlayerRaw[], tier: TierIds): NeutralItemsInTier => {
	const result = players.map((player, i) => {
		const item = {
			state: 'equipped' as const,
			tier: 0,
			name: '',
			level: 0,
			enchantment_name: '',
			enchantment_level: 0,
			player_id: i,
		};

		const currentTier = player[`tier${tier}`];

		if ('choice0' in currentTier.trinket_choices) {
			const trinket_choices = currentTier.trinket_choices;
			const choices = [trinket_choices.choice0, trinket_choices.choice1, trinket_choices.choice2, trinket_choices.choice3];
			const selectedChoice = choices.find(choice => choice.selected);
			if (selectedChoice) {
				item.name = selectedChoice.item_name;
				item.level = selectedChoice.item_level;
			}
		}

		if ('choice0' in currentTier.enchantment_choices) {
			const enchantment_choices = currentTier.enchantment_choices;
			const choices = [enchantment_choices.choice0, enchantment_choices.choice1, enchantment_choices.choice2, enchantment_choices.choice3];
			const selectedChoice = choices.find(choice => choice.selected);
			if (selectedChoice) {
				item.enchantment_name = selectedChoice.item_name;
				item.enchantment_level = selectedChoice.item_level || 1
			}
		}

		return item;
	});

	return {
		item0: result[0]!,
		item1: result[1]!,
		item2: result[2]!,
		item3: result[3]!,
		item4: result[4]!,
	}
}

const parseNeutralItemsTeamIntoOldFormat = (team: TeamNeutralItemsRaw): TeamNeutralItems => {
	const players = [team.player0, team.player1, team.player2, team.player3, team.player4,
		team.player5, team.player6, team.player7, team.player8, team.player9
	].filter(player => player);
	const result: TeamNeutralItems = {
		items_found: team.items_found,
		tier0: parseTierIntoOldFormat(players, 0),
		tier1: parseTierIntoOldFormat(players, 1),
		tier2: parseTierIntoOldFormat(players, 2),
		tier3: parseTierIntoOldFormat(players, 3),
		tier4: parseTierIntoOldFormat(players, 4),
	}
	return result;
}

const parseNeutralItemTierIntoOldFormat = (tier: {
	tier: number;
	madstone_required: number;
	drop_after_time: number;
	escalating_recraft_cost: number;
}):  {
	tier: number;
	max_count: number;
	drop_after_time: number;
	madstone_required: number;
	escalating_recraft_cost: number;
} => {
	return {
		...tier,
		max_count: 1
	}
}

const parseNeutralItemsIntoOldFormat = (neutralItems: NeutralItemsRaw): NeutralItems => {
	const result: NeutralItems = {
		tier0: parseNeutralItemTierIntoOldFormat(neutralItems.tier0),
		tier1: parseNeutralItemTierIntoOldFormat(neutralItems.tier1),
		tier2: parseNeutralItemTierIntoOldFormat(neutralItems.tier2),
		tier3: parseNeutralItemTierIntoOldFormat(neutralItems.tier3),
		tier4: parseNeutralItemTierIntoOldFormat(neutralItems.tier4),

		team2: parseNeutralItemsTeamIntoOldFormat(neutralItems.team2),
		team3: parseNeutralItemsTeamIntoOldFormat(neutralItems.team3)
	};


	return result;
}

export const parseNeutralItems = (
	currentTime: number,
	neutralItems?: NeutralItemsRaw,
	lastNeutralItems?: NeutralItems
): NeutralItems | undefined => {
	if (!neutralItems) return undefined;

	const newNeutralItems = parseNeutralItemsIntoOldFormat(neutralItems);

	if (!lastNeutralItems) return newNeutralItems;

	const result: NeutralItems = { ...newNeutralItems };

	const teams = [
		[result.team2, lastNeutralItems.team2],
		[result.team3, lastNeutralItems.team3]
	];
	for (const [nowTeam, lastTeam] of teams) {
		if (!nowTeam || !lastTeam) continue;
		for (const [tierNow, tierThen] of [
			[nowTeam.tier0, lastTeam.tier0],
			[nowTeam.tier1, lastTeam.tier1],
			[nowTeam.tier2, lastTeam.tier2],
			[nowTeam.tier3, lastTeam.tier3],
			[nowTeam.tier4, lastTeam.tier4]
		]) {
			if (!tierNow || !tierThen) continue;
			if (tierThen.completion_time) {
				tierNow.completion_time = tierThen.completion_time;
			} else if (!checkItemTier(tierThen) && checkItemTier(tierNow)) {
				tierNow.completion_time = currentTime;
			}
		}
	}

	return newNeutralItems;
};
