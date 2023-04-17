"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItem = exports.DOTA2GSI = void 0;
const items_prices_1 = require("./items_prices");
Object.defineProperty(exports, "getItem", { enumerable: true, get: function () { return items_prices_1.getItem; } });
const utils_js_1 = require("./utils.js");
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
            var _a;
            if (!rawGSI || !rawGSI.map)
                return null;
            const rawPlayers = [];
            for (const [key, player] of Object.entries({ ...rawGSI.player.team2, ...rawGSI.player.team3 })) {
                const id = Number(key.replace(/([^0-9])/g, ''));
                if (isNaN(id) || !player)
                    continue;
                rawPlayers.push({ id, player });
            }
            const rawBuildings = [];
            for (const [id, building] of Object.entries(rawGSI.buildings ? { ...rawGSI.buildings.dire, ...rawGSI.buildings.radiant } : {})) {
                if (!building)
                    continue;
                rawBuildings.push({ id: id, building });
            }
            const players = rawPlayers.map(data => utils_js_1.parsePlayer(data.player, data.id, rawGSI, this.players, this.current));
            const gsi = {
                provider: rawGSI.provider,
                map: utils_js_1.parseMap(rawGSI.map, this.teams),
                players,
                player: players.find(player => player.hero && player.hero.selected_unit) || null,
                buildings: rawBuildings.map(entry => utils_js_1.parseBuilding(entry.id, entry.building)),
                roshan: rawGSI.roshan,
                neutral_items: utils_js_1.parseNeutralItems(rawGSI.map.game_time, rawGSI.neutralitems, ((_a = this.last) === null || _a === void 0 ? void 0 : _a.neutral_items) || undefined) ||
                    null,
                events: rawGSI.events,
                outposts: utils_js_1.parseOutposts(rawGSI.minimap),
                runes: utils_js_1.parseRunes(rawGSI.minimap),
                draft: {
                    activeteam: rawGSI.draft.activeteam,
                    pick: rawGSI.draft.pick,
                    activeteam_time_remaining: rawGSI.draft.activeteam_time_remaining,
                    radiant: rawGSI.draft.team2 &&
                        'home_team' in rawGSI.draft.team2 &&
                        rawGSI.draft.radiant_bonus_time !== undefined
                        ? {
                            home_team: rawGSI.draft.team2.home_team,
                            bonus_time: rawGSI.draft.radiant_bonus_time,
                            picks: utils_js_1.parseDraft(rawGSI.draft.team2)
                        }
                        : undefined,
                    dire: rawGSI.draft.team3 &&
                        'home_team' in rawGSI.draft.team3 &&
                        rawGSI.draft.dire_bonus_time !== undefined
                        ? {
                            home_team: rawGSI.draft.team3.home_team,
                            bonus_time: rawGSI.draft.dire_bonus_time,
                            picks: utils_js_1.parseDraft(rawGSI.draft.team3)
                        }
                        : undefined
                }
            };
            this.current = gsi;
            if (this.last) {
                for (const player of gsi.players) {
                    const previousPlayer = this.last.players.find(lastPlayer => lastPlayer.steamid === player.steamid);
                    if (!previousPlayer)
                        continue;
                    const newKills = player.kill_list.filter(kill => {
                        const previousKill = previousPlayer.kill_list.find(oldKill => oldKill.victimid === kill.victimid);
                        if (!previousKill)
                            return true;
                        return previousKill.amount !== kill.amount;
                    });
                    for (const killEntry of newKills) {
                        const victim = gsi.players.find(player => player.id === killEntry.victimid);
                        if (!victim)
                            continue;
                        const kill = {
                            victim,
                            killer: player
                        };
                        this.emit('kill', kill);
                    }
                }
                if (gsi.map.win_team !== 'none' && this.last.map.win_team === 'none') {
                    const winTeam = gsi.map.win_team.toLowerCase();
                    if (winTeam.includes('dire')) {
                        this.emit('matchEnd', {
                            faction: 'dire',
                            teamId: gsi.map.dire.id,
                            name: gsi.map.dire.name
                        });
                    }
                    else {
                        this.emit('matchEnd', {
                            faction: 'radiant',
                            teamId: gsi.map.radiant.id,
                            name: gsi.map.radiant.name
                        });
                    }
                }
            }
            this.last = gsi;
            this.emit('data', gsi);
            return gsi;
        };
        this.descriptors = new Map();
        this.teams = {
            radiant: null,
            dire: null
        };
        this.maxListeners = 10;
        this.players = [];
    }
}
exports.DOTA2GSI = DOTA2GSI;
