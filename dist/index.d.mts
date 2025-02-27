type Faction = 'dire' | 'radiant';
//Dire = bad = team3, radiant = good = team2;

type Side = 'bad' | 'good';

type AttackType$1 = 'melee' | 'range' | null;

type BuildingType = 'tower' | 'rax' | 'fort';

type MapSides$1 = 'top' | 'mid' | 'bot';

type CourierItem = {
	owner: number;
	name: string;
};

type Courier = {
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
	items: CourierItem[];
	lost_items: CourierItem[];
	owner: number;
	team?: Faction;
};

type KillEvent = {
	killer: Player;
	victim: Player;
};

type GSIEvent$1 = GSIEvent;

interface Outposts {
	outsideNorth?: Faction;
	jungleNorth?: Faction;
	jungleSouth?: Faction;
	outsideSouth?: Faction;
}

interface Dota2 {
	buildings: Building[];
	provider: Provider$1;
	map: Map;
	players: Player[];
	draft: Draft$1;
	player: Player | null;
	roshan: Roshan | null;
	outposts: Outposts;
	events: GSIEvent$1[] | null;
	neutral_items: NeutralItems | null;
	//previously?: Previously | null;
	//added?: Added | null;
}

interface Building {
	health: number;
	max_health: number;
	faction: Faction;
	attack: AttackType$1;
	type: BuildingType;
	side: Side;
	position: MapSides$1 | null;
	number: number | null;
}

interface Provider$1 {
	name: string;
	appid: number;
	version: number;
	timestamp: number;
}

interface Team {
	ward_purchase_cooldown: number;
	name: string;
	map_score: number;
	extra: Record<string, string>;

	id: string | null;
	country: string | null;
	logo: string | null;
	short_name: string | null;
}

interface Map {
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

type KillEntry = {
	victimid: number;
	amount: number;
};

interface Player {
	steamid: string;
	defaultName: string;
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
	courier: Courier | null;
	name: string;
	activity: string;
	kills: number;
	deaths: number;
	assists: number;
	last_hits: number;
	hero_healing: number;
	denies: number;
	kill_streak: number;
	commands_issued: number;
	tower_damage: number;
	team_name: string;
	gold: number;
	team_slot: number;
	player_slot: number;
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

interface Hero {
	id: number;
	facet?: number | null;
	facetIndex?: number | null;
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
	attributes_level?: number | null;
}

interface Ability {
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

type ItemType = 'slot' | 'stash' | 'teleport' | 'neutral';

interface Item {
	id: number;
	name: string;
	type: ItemType;
	purchaser?: number | null;
	can_cast?: boolean | null;
	cooldown?: number | null;
	passive?: boolean | null;
	charges?: number | null;
	item_level?: number | null;
	contains_rune?: 'empty' | 'water' | 'arcane' | 'double_damage' | 'haste' | 'regen' | 'shield' | 'illusion';
}

type DraftEntry = {
	type: 'pick' | 'ban';
	player_id: number;
	class: string;
	order: number;
};

type TeamDraft = {
	home_team: boolean;
	bonus_time: number;
	picks: DraftEntry[];
};

interface Draft$1 {
	activeteam?: number;
	pick?: boolean;
	activeteam_time_remaining?: number;
	radiant?: TeamDraft;
	dire?: TeamDraft;
}

type WearableType = 'wearable' | 'style';

type Wearable = {
	id: number;
	type: WearableType;
	value: number;
};

type NeutralItemInTier =
	{
		name: string;
		tier: number;
	} & (
		| {
			state: 'stash';
		}
		| {
			state: 'unknown';
		}
		| {
			state: 'equipped';
			player_id: number;
		}
	);


type NeutralItemsInTier = {
	[x in `item${PlayerInTierIds}`]: NeutralItemInTier
} & {
	completion_time?: number;
};

type TeamNeutralItems = {
	items_found: number;
} & {
	[x in `tier${TierIds}`]: NeutralItemsInTier;
};

type NeutralItems = {
	team2: TeamNeutralItems;
	team3: TeamNeutralItems;
} & {
	[x in `tier${TierIds}`]: {
		tier: number;
		max_count: number;
		drop_after_time: number;
	};
};

interface TeamExtension {
	id: string;
	name: string;
	country: string | null;
	logo: string | null;
	map_score: number;
	extra: Record<string, string>;
	short_name: string | null;
}

interface PlayerExtension {
	id: string;
	name: string;
	steamid: string;
	realName: string | null;
	country: string | null;
	avatar: string | null;
	extra: Record<string, string>;
}

interface MatchEnd {
	faction: Faction;
	teamId: string | null;
	name: string;
}

interface Dota2Raw {
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
	couriers?: { [courierName: string]: CourierRaw };
	roshan?: Roshan;
	neutralitems?: NeutralItemsRaw;
	events?: GSIEvent[];
}

interface Buildings {
	radiant: TeamBuildings;
	dire: TeamBuildings;
}

interface BuildingInfo {
	health: number;
	max_health: number;
}

type RadiantPlayerIds = 0 | 1 | 2 | 3 | 4;
type DirePlayerIds = 5 | 6 | 7 | 8 | 9;

type PlayerIds = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type SlotsIds = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type MapSides = 'top' | 'mid' | 'bot';

type AttackType = 'melee' | 'range';

type GuysType = 'good' | 'bad';

type TeamBuildingsKeys =
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
interface MapRaw {
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

type PlayerKey<N extends RadiantPlayerIds | DirePlayerIds> = `player${N}`;

type PlayerKeys = PlayerKey<RadiantPlayerIds | DirePlayerIds>;

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

interface PlayerRaw {
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
	hero_healing: number;
	wards_placed: number;
	wards_destroyed: number;
	tower_damage: number;
	team_slot: number;
	player_slot: number;
	runes_activated: number;
	camps_stacked: number;
	support_gold_spent: number;
	consumable_gold_spent: number;
	item_gold_spent: number;
	gold_lost_to_death: number;
	gold_spent_on_buybacks: number;
}

interface HeroRaw {
	id: number;
	facet?: number | null;
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

interface AbilityRaw {
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
	contains_rune?: 'empty' | 'water' | 'arcane' | 'double_damage' | 'haste' | 'regen' | 'shield' | 'illusion';
}

type Slots<Type extends string, N> = {
	[x in `${Type}${SlotsIds}`]?: N;
};

type Abilities = TeamPlayerList<Slots<'ability', AbilityRaw>>;

type Items = TeamPlayerList<Slots<'slot' | 'stash' | 'teleport' | 'neutral', ItemRaw>>;

type BanIds = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type PickIds = 0 | 1 | 2 | 3 | 4;

type TeamDraftRaw = { [x in `pick${PickIds}_id` | `ban${BanIds}_id`]: number } &
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
type PlayerInTierIds = 0 | 1 | 2 | 3 | 4;
type ChoiceIds = 0 | 1 | 2 | 3;
type ItemIds = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface MinimapPoint {
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

interface CourierRaw {
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

interface Roshan {
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

interface BaseGSIEvent {
	game_time: number;
}

interface TipEvent extends BaseGSIEvent {
	event_type: 'tip';
	tip_amount: number;
	sender_player_id: number;
	receiver_player_id: number;
}

interface BountyRunePickupEvent extends BaseGSIEvent {
	event_type: 'bounty_rune_pickup';
	player_id: number;
	team: Faction;
	bounty_value: number;
	team_gold: number;
}

interface AegisPickupEvent extends BaseGSIEvent {
	event_type: 'aegis_picked_up';
	player_id: number;
	snatched: boolean;
}

interface CourierKilledEvent extends BaseGSIEvent {
	event_type: 'courier_killed';
	killer_player_id: number;
	courier_team: Faction;
	owning_player_id: number;
}

interface RoshanKilledEvent extends BaseGSIEvent {
	event_type: 'roshan_killed';
	killer_player_id: number;
	killed_by_team: Faction;
}

type GSIEvent = TipEvent | BountyRunePickupEvent | AegisPickupEvent | CourierKilledEvent | RoshanKilledEvent;

type NeutralItemsInPlayerTierChoicesRaw = {
	[x in `choice${ChoiceIds}`]: {
		item_name: string;
		item_level: number;
		selected: boolean;
	} 
};

type NeutralItemsInPlayerTierRaw = {
	tier: number;
	trinket_choices: {} | NeutralItemsInPlayerTierChoicesRaw;
	enchantment_choices: {} | NeutralItemsInPlayerTierChoicesRaw
}


type NeutralItemsInPlayerRaw = {
	current_madstone: number;
	total_madstone: number;
	crafting_tier: number; }
	& {
	[x in `tier${TierIds}`]: NeutralItemsInPlayerTierRaw;
};

type TeamNeutralItemsRaw = {
	items_found: number;
} & {
	[x in `player${PlayerInTierIds}`]: NeutralItemsInPlayerRaw;
};

type NeutralItemsRaw = {
	team2: TeamNeutralItemsRaw;
	team3: TeamNeutralItemsRaw;
	max_madstone: number;
} & {
	[x in `tier${TierIds}`]: {
		tier: number;
		madstone_required: number;
		drop_after_time: number;
		escalating_recraft_cost: number;
	};
};

type ItemPriceDefinition = {
    name: string;
    origin: string;
    price: number;
};
declare const getItem: (itemName: string) => ItemPriceDefinition;

interface Events {
    data: (data: Dota2) => void;
    kill: (kill: KillEvent) => void;
    matchEnd: (data: MatchEnd) => void;
    newListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => void;
    removeListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => void;
}
type AnyEventName<T> = T | (string & {});
type BaseEvents = keyof Events;
type EventNames = AnyEventName<BaseEvents>;
type EmptyListener = () => void;
type Callback<K> = K extends BaseEvents ? Events[K] | EmptyListener : EmptyListener;
interface EventDescriptor {
    listener: Events[BaseEvents];
    once: boolean;
}
declare class DOTA2GSI {
    private descriptors;
    private maxListeners;
    teams: {
        radiant: TeamExtension | null;
        dire: TeamExtension | null;
    };
    players: PlayerExtension[];
    last?: Dota2;
    current?: Dota2;
    constructor();
    eventNames: () => EventNames[];
    getMaxListeners: () => number;
    listenerCount: (eventName: EventNames) => number;
    listeners: (eventName: EventNames) => (((data: Dota2) => void) | ((kill: KillEvent) => void) | ((data: MatchEnd) => void) | (<K extends keyof Events>(eventName: K, listener: Events[K]) => void) | (<K_1 extends keyof Events>(eventName: K_1, listener: Events[K_1]) => void))[];
    removeListener: <K extends EventNames>(eventName: K, listener: Callback<K>) => this;
    off: <K extends EventNames>(eventName: K, listener: Callback<K>) => this;
    addListener: <K extends EventNames>(eventName: K, listener: Callback<K>) => this;
    on: <K extends EventNames>(eventName: K, listener: Callback<K>) => this;
    once: <K extends EventNames>(eventName: K, listener: Callback<K>) => this;
    prependListener: <K extends EventNames>(eventName: K, listener: Callback<K>) => this;
    emit: (eventName: EventNames, arg?: any, arg2?: any) => boolean;
    prependOnceListener: <K extends EventNames>(eventName: K, listener: Callback<K>) => this;
    removeAllListeners: (eventName: EventNames) => this;
    setMaxListeners: (n: number) => this;
    rawListeners: (eventName: EventNames) => EventDescriptor[];
    digest: (rawGSI: Dota2Raw) => Dota2 | null;
}

export { type Ability, type AnyEventName, type AttackType$1 as AttackType, type BaseEvents, type Building, type BuildingType, type Callback, DOTA2GSI, type DirePlayerIds, type Dota2, type Dota2Raw, type Draft$1 as Draft, type DraftEntry, type EmptyListener, type EventNames, type Faction, type GSIEvent, type Hero, type HeroRaw, type Item, type ItemType, type KillEntry, type KillEvent, type Map, type MapSides$1 as MapSides, type NeutralItems, type Outposts, type Player, type PlayerExtension, type PlayerKey, type PlayerKeys, type PlayerRaw, type Provider$1 as Provider, type RadiantPlayerIds, type Roshan, type Side, type Team, type TeamDraft, type TeamExtension, type Wearable, type WearableType, getItem };
