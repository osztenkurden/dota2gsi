import { Faction } from './parsed';

//export * from './dota2';
export * from './parsed';

export interface TeamExtension {
	id: string;
	name: string;
	country: string | null;
	logo: string | null;
	map_score: number;
	extra: Record<string, string>;
	short_name: string | null;
}

export interface PlayerExtension {
	id: string;
	name: string;
	steamid: string;
	realName: string | null;
	country: string | null;
	avatar: string | null;
	extra: Record<string, string>;
}

export interface MatchEnd {
	faction: Faction;
	teamId: string | null;
	name: string;
}
