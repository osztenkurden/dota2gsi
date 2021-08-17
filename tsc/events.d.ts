import * as I from './interfaces';

export interface Events {
	data: (data: I.Dota2) => void;
	matchEnd: (data: I.MatchEnd) => void;
	newListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => void;
	removeListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => void;
}
