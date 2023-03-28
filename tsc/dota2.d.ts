export interface Dota2Raw {
	buildings?: Buildings;
	provider: Provider;
	map: MapRaw;
	player: Players;
	hero: Heros;
	abilities: Abilities;
	items: Items;
	draft: Draft;
	wearables: Wearables;
	minimap?: { [pointName: string]: MinimapPoint };
	couriers: { [courierName: string]: CourierRaw };
	roshan: Roshan;
	neutralitems: NeutralItems;
	events: GSIEvent[];
}

interface Buildings {
	radiant: TeamBuildings;
	dire: TeamBuildings;
}

export interface BuildingInfo {
	health: number;
	max_health: number;
}

export type RadiantPlayerIds = 0 | 1 | 2 | 3 | 4;
export type DirePlayerIds = 5 | 6 | 7 | 8 | 9;

type PlayerIds = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type SlotsIds = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type MapSides = 'top' | 'mid' | 'bot';

type AttackType = 'melee' | 'range';

type GuysType = 'good' | 'bad';

export type TeamBuildingsKeys =
	| `dota_${GuysType}guys_tower${1 | 2 | 3}_${MapSides}`
	| `dota_${GuysType}guys_tower4_${'top' | 'bot'}`
	| `${GuysType}_rax_${AttackType}_${MapSides}`
	| `dota_${GuysType}guys_fort`;

type TeamBuildings = {
	[x in TeamBuildingsKeys]?: BuildingInfo | null;
};

interface Provider {
	name: string;
	appid: number;
	version: number;
	timestamp: number;
}
export interface MapRaw {
	name: string;
	matchid: string;
	game_time: number;
	clock_time: number;
	daytime: boolean;
	nightstalker_night: boolean;
	game_state: string;
	paused: boolean;
	win_team: string;
	customgamename: string;
	radiant_ward_purchase_cooldown: number;
	dire_ward_purchase_cooldown: number;
	roshan_state: string;
	roshan_state_end_seconds: number;
	radiant_win_chance: number;
}

export type PlayerKey<N extends RadiantPlayerIds | DirePlayerIds> = `player${N}`;

export type PlayerKeys = PlayerKey<RadiantPlayerIds | DirePlayerIds>;

type PlayerList<T, N extends RadiantPlayerIds | DirePlayerIds> = {
	[x in PlayerKey<N>]?: T;
};

type TeamPlayerList<T> = {
	team2: PlayerList<T, RadiantPlayerIds>;
	team3: PlayerList<T, DirePlayerIds>;
};

type Players = TeamPlayerList<PlayerRaw>;

type KillList = {
	[x in `victimid_${PlayerIds}`]?: number | null;
};

export interface PlayerRaw {
	steamid: string;
	name: string;
	activity: string;
	kills: number;
	deaths: number;
	assists: number;
	last_hits: number;
	denies: number;
	kill_streak: number;
	commands_issued: number;
	kill_list: KillList;
	team_name: 'dire' | 'radiant';
	gold: number;
	gold_reliable: number;
	gold_unreliable: number;
	gold_from_hero_kills: number;
	gold_from_creep_kills: number;
	gold_from_income: number;
	gold_from_shared: number;
	gpm: number;
	xpm: number;
	net_worth: number;
	hero_damage: number;
	wards_purchased: number;
	wards_placed: number;
	wards_destroyed: number;
	runes_activated: number;
	camps_stacked: number;
	support_gold_spent: number;
	consumable_gold_spent: number;
	item_gold_spent: number;
	gold_lost_to_death: number;
	gold_spent_on_buybacks: number;
}

export interface HeroRaw {
	id: number;
	xpos?: number | null;
	ypos?: number | null;
	name?: string | null;
	level?: number | null;
	xp?: number | null;
	alive?: boolean | null;
	respawn_seconds?: number | null;
	buyback_cost?: number | null;
	buyback_cooldown?: number | null;
	health?: number | null;
	max_health?: number | null;
	health_percent?: number | null;
	mana?: number | null;
	max_mana?: number | null;
	mana_percent?: number | null;
	silenced?: boolean | null;
	stunned?: boolean | null;
	disarmed?: boolean | null;
	magicimmune?: boolean | null;
	hexed?: boolean | null;
	muted?: boolean | null;
	break?: boolean | null;
	aghanims_scepter?: boolean | null;
	aghanims_shard?: boolean | null;
	smoked?: boolean | null;
	has_debuff?: boolean | null;
	selected_unit?: boolean | null;
	talent_1?: boolean | null;
	talent_2?: boolean | null;
	talent_3?: boolean | null;
	talent_4?: boolean | null;
	talent_5?: boolean | null;
	talent_6?: boolean | null;
	talent_7?: boolean | null;
	talent_8?: boolean | null;
}

type Heros = TeamPlayerList<HeroRaw>;

export interface AbilityRaw {
	name: string;
	level: number;
	can_cast: boolean;
	passive: boolean;
	ability_active: boolean;
	cooldown: number;
	ultimate: boolean;
	charges?: number;
	max_charges?: number;
	charge_cooldown?: number;
}

interface ItemRaw {
	name: string;
	purchaser?: number | null;
	can_cast?: boolean | null;
	cooldown?: number | null;
	passive?: boolean | null;
	charges?: number | null;
}

type Slots<Type extends string, N> = {
	[x in `${Type}${SlotsIds}`]?: N;
};

type Abilities = TeamPlayerList<Slots<'ability', AbilityRaw>>;

type Items = TeamPlayerList<Slots<'slot' | 'stash' | 'teleport' | 'neutral', ItemRaw>>;

type BanIds = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type PickIds = 0 | 1 | 2 | 3 | 4;

export type TeamDraftRaw = { [x in `pick${PickIds}_id` | `ban${BanIds}_id`]: number } &
	{ [x in `pick${PickIds}_class` | `ban${BanIds}_class`]: string } & { home_team: boolean };

interface Draft {
	activeteam?: number;
	pick?: boolean;
	activeteam_time_remaining?: number;
	radiant_bonus_time?: number;
	dire_bonus_time?: number;
	team2?: TeamDraftRaw;
	team3?: TeamDraftRaw;
}

type Wearables = TeamPlayerList<Slots<'wearable' | 'style', number>>;

type TierIds = 0 | 1 | 2 | 3 | 4;
type ItemInTierIds = 0 | 1 | 2 | 3 | 4;
type ItemIds = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface MinimapPoint {
	xpos: number;
	ypos: number;
	image?: string;
	team?: number;
	yaw: number;
	unitname?: string;
	visionrange?: number;
}

interface CourierItemRaw {
	owner: string;
	name: string;
}

export interface CourierRaw {
	health: number;
	max_health: number;
	alive: boolean;
	boost: boolean;
	flying_upgrade: boolean;
	shield: boolean;
	respawn_time_remaining: number;
	xpos: number;
	ypos: number;
	yaw: number;
	items: { [itemId: string]: CourierItemRaw };
	owner: string;
}

export interface Roshan {
	alive: boolean;
	health: number;
	max_health: number;
	phase_time_remaining: number;
	spawn_phase: number;
	xpos: number;
	ypos: number;
	yaw: number;
	items_drop?: {
		[x in `item_${ItemIds}`]?: string;
	};
}

export interface GSIEvent {
	event_type: string;
	game_time: number;
}

export interface League {
	league_id: number;
	match_id: string;
}

export type NeutralItemsInTier = {
	[x in `item${ItemInTierIds}`]: {
		name: string;
		tier: number;
	} & (
		| {
				state: 'stash';
		  }
		| {
				state: 'equipped';
				player_id: number;
		  }
	);
};

export type TeamNeutralItems = {
	items_found: number;
} & {
	[x in `tier${TierIds}`]: NeutralItemsInTier;
};

export type NeutralItems = {
	team2: TeamNeutralItems;
	team3: TeamNeutralItems;
} & {
	[x in `tier${TierIds}`]: {
		tier: number;
		max_count: number;
		drop_after_time: number;
	};
};
