import { parseBuilding, parseDraft, parseMap, parsePlayer } from './utils';
class DOTA2GSI {
    constructor() {
        this.eventNames = () => {
            const listeners = this.descriptors.entries();
            const nonEmptyEvents = [];
            for (const entry of listeners) {
                if (entry[1] && entry[1].length > 0) {
                    nonEmptyEvents.push(entry[0]);
                }
            }
            return nonEmptyEvents;
        };
        this.getMaxListeners = () => this.maxListeners;
        this.listenerCount = (eventName) => {
            const listeners = this.listeners(eventName);
            return listeners.length;
        };
        this.listeners = (eventName) => {
            const descriptors = this.descriptors.get(eventName) || [];
            return descriptors.map(descriptor => descriptor.listener);
        };
        this.removeListener = (eventName, listener) => {
            return this.off(eventName, listener);
        };
        this.off = (eventName, listener) => {
            const descriptors = this.descriptors.get(eventName) || [];
            this.descriptors.set(eventName, descriptors.filter(descriptor => descriptor.listener !== listener));
            this.emit('removeListener', eventName, listener);
            return this;
        };
        this.addListener = (eventName, listener) => {
            return this.on(eventName, listener);
        };
        this.on = (eventName, listener) => {
            this.emit('newListener', eventName, listener);
            const listOfListeners = [...(this.descriptors.get(eventName) || [])];
            listOfListeners.push({ listener, once: false });
            this.descriptors.set(eventName, listOfListeners);
            return this;
        };
        this.once = (eventName, listener) => {
            const listOfListeners = [...(this.descriptors.get(eventName) || [])];
            listOfListeners.push({ listener, once: true });
            this.descriptors.set(eventName, listOfListeners);
            return this;
        };
        this.prependListener = (eventName, listener) => {
            const listOfListeners = [...(this.descriptors.get(eventName) || [])];
            listOfListeners.unshift({ listener, once: false });
            this.descriptors.set(eventName, listOfListeners);
            return this;
        };
        this.emit = (eventName, arg, arg2) => {
            const listeners = this.descriptors.get(eventName);
            if (!listeners || listeners.length === 0)
                return false;
            listeners.forEach(listener => {
                if (listener.once) {
                    this.descriptors.set(eventName, listeners.filter(listenerInArray => listenerInArray !== listener));
                }
                listener.listener(arg, arg2);
            });
            return true;
        };
        this.prependOnceListener = (eventName, listener) => {
            const listOfListeners = [...(this.descriptors.get(eventName) || [])];
            listOfListeners.unshift({ listener, once: true });
            this.descriptors.set(eventName, listOfListeners);
            return this;
        };
        this.removeAllListeners = (eventName) => {
            this.descriptors.set(eventName, []);
            return this;
        };
        this.setMaxListeners = (n) => {
            this.maxListeners = n;
            return this;
        };
        this.rawListeners = (eventName) => {
            return this.descriptors.get(eventName) || [];
        };
        this.digest = (rawGSI) => {
            const rawPlayers = [];
            for (const [key, player] of Object.entries({ ...rawGSI.player.team2, ...rawGSI.player.team3 })) {
                const id = Number(key.replace(/([^0-9])/g, ''));
                if (isNaN(id) || !player)
                    continue;
                rawPlayers.push({ id, player });
            }
            const rawBuildings = [];
            for (const [id, building] of Object.entries({ ...rawGSI.buildings.dire, ...rawGSI.buildings.radiant })) {
                if (!building)
                    continue;
                rawBuildings.push({ id: id, building });
            }
            const gsi = {
                provider: rawGSI.provider,
                map: parseMap(rawGSI.map, { dire: null, radiant: null }),
                players: rawPlayers.map(data => parsePlayer(data.player, data.id, rawGSI, [])),
                buildings: rawBuildings.map(entry => parseBuilding(entry.id, entry.building)),
                draft: {
                    activeteam: rawGSI.draft.activeteam,
                    pick: rawGSI.draft.pick,
                    activeteam_time_remaining: rawGSI.draft.activeteam_time_remaining,
                    radiant: {
                        home_team: rawGSI.draft.team2.home_team,
                        bonus_time: rawGSI.draft.radiant_bonus_time,
                        picks: parseDraft(rawGSI.draft.team2)
                    },
                    dire: {
                        home_team: rawGSI.draft.team3.home_team,
                        bonus_time: rawGSI.draft.dire_bonus_time,
                        picks: parseDraft(rawGSI.draft.team3)
                    }
                }
            };
            this.emit('data', gsi);
        };
        this.descriptors = new Map();
        this.teams = {
            left: null,
            right: null
        };
        this.maxListeners = 10;
        this.players = [];
    }
}
export { DOTA2GSI };
