export type Faction = 'dire' | 'radiant';
//Dire = bad = team3, radiant = good = team2;

export type Side = 'bad' | 'good';

export type AttackType = 'melee' | 'range' | null;

export type BuildingType = 'tower' | 'rax' | 'fort';

export type MapSides = 'top' | 'mid' | 'bot';
export interface Dota2 {
	buildings: Building[];
	provider: Provider;
	map: Map;
	players: Player[];
	draft: Draft;
	player: Player | null;
	//previously?: Previously | null;
	//added?: Added | null;
}
export interface Building {
	health: number;
	max_health: number;
	faction: Faction;
	attack: AttackType;
	type: BuildingType;
	side: Side;
	position: MapSides | null;
	number: number | null;
}

export interface Provider {
	name: string;
	appid: number;
	version: number;
	timestamp: number;
}

export interface Team {
	ward_purchase_cooldown: number;
	name: string;
	map_score: number;
	extra: Record<string, string>;

	id: string | null;
	country: string | null;
	logo: string | null;
}
export interface Map {
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
	radiant: Team;
	dire: Team;
	roshan_state: string;
	roshan_state_end_seconds: number;
	radiant_win_chance: number;
}

export type KillEntry = {
	victimid: number;
	amount: number;
};

export interface Player {
	steamid: string;

	id: number;

	realName: string | null;
	country: string | null;
	avatar: string | null;
	extra: Record<string, string>;

	hero: Hero | null;
	abilities: Ability[];
	items: Item[];
	wearables: Wearable[];
	kill_list: KillEntry[];
	name: string;
	activity: string;
	kills: number;
	deaths: number;
	assists: number;
	last_hits: number;
	denies: number;
	kill_streak: number;
	commands_issued: number;
	team_name: string;
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

export interface Hero {
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

export interface Ability {
	id: number;
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

export type ItemType = 'slot' | 'stash' | 'teleport' | 'neutral';

export interface Item {
	id: number;
	name: string;
	type: ItemType;
	purchaser?: number | null;
	can_cast?: boolean | null;
	cooldown?: number | null;
	passive?: boolean | null;
	charges?: number | null;
}

export type DraftEntry = {
	type: 'pick' | 'ban';
	player_id: number;
	class: string;
	order: number;
};

export type TeamDraft = {
	home_team: boolean;
	bonus_time: number;
	picks: DraftEntry[];
};

export interface Draft {
	activeteam?: number;
	pick?: boolean;
	activeteam_time_remaining?: number;
	radiant?: TeamDraft;
	dire?: TeamDraft;
}

export type WearableType = 'wearable' | 'style';

export type Wearable = {
	id: number;
	type: WearableType;
	value: number;
};
