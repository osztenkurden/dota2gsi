import { PlayerRaw, Dota2Raw, Player, PlayerExtension } from '.';
import { BuildingInfo, MapRaw, TeamBuildingsKeys, TeamDraftRaw } from './dota2';
import { TeamExtension, Team, Map, Building, Faction } from './interfaces';
import { DraftEntry } from './parsed';
export declare const parsePlayer: (
	basePlayer: PlayerRaw,
	id: number,
	data: Dota2Raw,
	extensions: PlayerExtension[]
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
