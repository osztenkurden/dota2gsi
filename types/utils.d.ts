import { Dota2Raw, Player, PlayerExtension, PlayerRaw } from '.';
import {
	BuildingInfo,
	CourierRaw,
	MapRaw,
	MinimapPoint,
	NeutralItemsRaw,
	TeamBuildingsKeys,
	TeamDraftRaw
} from './dota2';
import { Building, Faction, Map, Team, TeamExtension } from './interfaces';
import { Courier, Dota2, DraftEntry, NeutralItems, Outposts } from './parsed';
export declare const parsePlayer: (
	basePlayer: PlayerRaw,
	id: number,
	data: Dota2Raw,
	extensions: PlayerExtension[],
	lastData?: Dota2 | undefined
) => Player;
export declare const parseTeam: (map: MapRaw, type: Faction, extension: TeamExtension | null) => Team;
export declare const parseMap: (
	rawMap: MapRaw,
	extensions: {
		dire: TeamExtension | null;
		radiant: TeamExtension | null;
	}
) => Map;
export declare const parseBuilding: (buildingKey: TeamBuildingsKeys, building: BuildingInfo) => Building;
export declare const parseDraft: (draft: TeamDraftRaw) => DraftEntry[];
export declare const parseCourier: (
	courier: CourierRaw,
	lastCourier?: Courier | undefined,
	team?: string | undefined
) => Courier;
export declare const parseOutposts: (
	minimap?:
		| {
				[pointName: string]: MinimapPoint;
		  }
		| undefined
) => Outposts;
export declare const parseNeutralItems: (
	currentTime: number,
	neutralItems?: NeutralItemsRaw | undefined,
	lastNeutralItems?: NeutralItems | undefined
) => NeutralItems | undefined;
