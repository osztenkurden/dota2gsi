import { DirePlayerIds, Dota2Raw, HeroRaw, PlayerKey, PlayerKeys, PlayerRaw, RadiantPlayerIds } from './dota2';
import { MatchEnd, PlayerExtension, TeamExtension } from './interfaces';
import { getItem } from './items_prices';
import { Ability, AttackType, Building, BuildingType, Dota2, Map as DotaMap, Draft, DraftEntry, Faction, Hero, Item, ItemType, KillEntry, KillEvent, MapSides, Player, Provider, Side, Team, TeamDraft, Wearable, WearableType } from './parsed';
interface Events {
    data: (data: Dota2) => void;
    kill: (kill: KillEvent) => void;
    matchEnd: (data: MatchEnd) => void;
    newListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => void;
    removeListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => void;
}
declare type EventNames = keyof Events;
interface EventDescriptor {
    listener: Events[EventNames];
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
    eventNames: () => (keyof Events)[];
    getMaxListeners: () => number;
    listenerCount: (eventName: EventNames) => number;
    listeners: (eventName: EventNames) => (((data: Dota2) => void) | ((kill: KillEvent) => void) | ((data: MatchEnd) => void) | (<K extends keyof Events>(eventName: K, listener: Events[K]) => void) | (<K_1 extends keyof Events>(eventName: K_1, listener: Events[K_1]) => void))[];
    removeListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => this;
    off: <K extends keyof Events>(eventName: K, listener: Events[K]) => this;
    addListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => this;
    on: <K extends keyof Events>(eventName: K, listener: Events[K]) => this;
    once: <K extends keyof Events>(eventName: K, listener: Events[K]) => this;
    prependListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => this;
    emit: (eventName: EventNames, arg?: any, arg2?: any) => boolean;
    prependOnceListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => this;
    removeAllListeners: (eventName: EventNames) => this;
    setMaxListeners: (n: number) => this;
    rawListeners: (eventName: EventNames) => EventDescriptor[];
    digest: (rawGSI: Dota2Raw) => Dota2 | null;
}
export { DOTA2GSI };
export { PlayerRaw, Dota2Raw, Player, PlayerExtension, TeamExtension, Hero, HeroRaw, PlayerKeys, PlayerKey, RadiantPlayerIds, DirePlayerIds, Dota2, Faction, Side, AttackType, Ability, Building, BuildingType, ItemType, MapSides, Team, Provider, Item, Draft, DraftEntry, TeamDraft, Wearable, WearableType, KillEntry, DotaMap as Map, getItem };
