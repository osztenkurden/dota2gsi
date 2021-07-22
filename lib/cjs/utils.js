"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDraft = exports.parseBuilding = exports.parseMap = exports.parseTeam = exports.parsePlayer = void 0;
const getPlayersAttibute = (playerId, data, attribute) => {
    const identifier = `player${playerId}`;
    const attributeSlots = data[attribute].team2[identifier] || data[attribute].team3[identifier];
    if (!attributeSlots)
        return [];
    const response = [];
    for (const [key, entry] of Object.entries(attributeSlots)) {
        if (!entry && entry !== 0)
            continue;
        const id = Number(key.replace(/([^0-9])/g, ''));
        if (isNaN(id))
            continue;
        if (attribute === 'abilities') {
            const element = {
                ...entry,
                id
            };
            response.push(element);
        }
        else if (attribute === 'items') {
            const type = key.replace(/([0-9])/g, '');
            const element = {
                ...entry,
                type,
                id
            };
            response.push(element);
        }
        else if (attribute === 'wearables') {
            const type = key.replace(/([0-9])/g, '');
            const element = {
                id,
                type,
                value: entry
            };
            response.push(element);
        }
    }
    return response;
};
const parsePlayer = (basePlayer, id, data, extensions) => {
    const extension = extensions.find(player => player.steamid === basePlayer.steamid);
    const identifier = `player${id}`;
    const targetHero = data.hero.team2[identifier] || data.hero.team3[identifier] || null;
    const player = {
        ...basePlayer,
        hero: targetHero,
        abilities: getPlayersAttibute(id, data, 'abilities'),
        items: getPlayersAttibute(id, data, 'items'),
        wearables: getPlayersAttibute(id, data, 'wearables'),
        name: (extension === null || extension === void 0 ? void 0 : extension.name) || basePlayer.name,
        country: (extension === null || extension === void 0 ? void 0 : extension.country) || null,
        avatar: (extension === null || extension === void 0 ? void 0 : extension.avatar) || null,
        extra: (extension === null || extension === void 0 ? void 0 : extension.extra) || {},
        realName: (extension === null || extension === void 0 ? void 0 : extension.realName) || null,
        kill_list: []
    };
    for (const [key, value] of Object.entries(basePlayer.kill_list)) {
        if (!value)
            continue;
        const victimid = Number(key.replace(/([^0-9])/g, ''));
        const existingEntry = player.kill_list.find(killEntry => killEntry.victimid === victimid);
        if (!existingEntry) {
            player.kill_list.push({
                victimid,
                amount: value
            });
            continue;
        }
        existingEntry.amount = value;
    }
    return player;
};
exports.parsePlayer = parsePlayer;
const parseTeam = (map, type, extension) => ({
    ward_purchase_cooldown: map[type === 'dire' ? `dire_ward_purchase_cooldown` : 'radiant_ward_purchase_cooldown'],
    name: (extension === null || extension === void 0 ? void 0 : extension.name) || type.toUpperCase(),
    map_score: (extension === null || extension === void 0 ? void 0 : extension.map_score) || 0,
    extra: (extension === null || extension === void 0 ? void 0 : extension.extra) || {},
    id: (extension === null || extension === void 0 ? void 0 : extension.id) || null,
    country: (extension === null || extension === void 0 ? void 0 : extension.country) || null,
    logo: (extension === null || extension === void 0 ? void 0 : extension.logo) || null
});
exports.parseTeam = parseTeam;
const parseMap = (rawMap, extensions) => {
    const map = {
        name: rawMap.name,
        matchid: rawMap.matchid,
        game_state: rawMap.game_state,
        game_time: rawMap.game_time,
        clock_time: rawMap.clock_time,
        daytime: rawMap.daytime,
        nightstalker_night: rawMap.nightstalker_night,
        paused: rawMap.paused,
        win_team: rawMap.win_team,
        customgamename: rawMap.customgamename,
        roshan_state: rawMap.roshan_state,
        roshan_state_end_seconds: rawMap.roshan_state_end_seconds,
        radiant_win_chance: rawMap.radiant_win_chance,
        dire: exports.parseTeam(rawMap, 'dire', extensions.dire),
        radiant: exports.parseTeam(rawMap, 'radiant', extensions.radiant)
    };
    return map;
};
exports.parseMap = parseMap;
const parseBuilding = (buildingKey, building) => {
    const side = buildingKey.includes('good') ? 'good' : 'bad';
    const faction = side === 'good' ? 'radiant' : 'dire';
    let attack = null;
    let type = 'tower';
    let order = null;
    if (buildingKey.includes('rax')) {
        type = 'rax';
        attack = buildingKey.includes('melee') ? 'melee' : 'range';
    }
    else if (buildingKey.includes('fort')) {
        type = 'fort';
    }
    else {
        const towerNumber = Number(buildingKey.substr(buildingKey.indexOf('tower') + 5, 1));
        if (!isNaN(towerNumber)) {
            order = towerNumber;
        }
    }
    const lastSegment = buildingKey.substring(buildingKey.lastIndexOf('_') + 1);
    const position = ['top', 'bot', 'mid'].includes(lastSegment) ? lastSegment : null;
    return {
        side,
        faction,
        attack,
        type,
        position,
        number: order,
        ...building
    };
};
exports.parseBuilding = parseBuilding;
const parseDraft = (draft) => {
    const entries = [];
    const keys = Object.keys(draft).sort();
    for (const key of keys) {
        if (key === 'home_team')
            continue;
        const order = Number(key.replace(/([^0-9])/g, ''));
        if (isNaN(order))
            continue;
        const type = key.startsWith('pick') ? 'pick' : 'ban';
        const value = draft[key];
        let currentEntry = entries.find(entry => entry.order === order && entry.type === type);
        if (!currentEntry) {
            currentEntry = {
                player_id: 0,
                type,
                class: '',
                order
            };
            entries.push(currentEntry);
        }
        if (key.includes('_id')) {
            currentEntry.player_id = value;
        }
        else {
            currentEntry.class = value;
        }
    }
    return entries;
};
exports.parseDraft = parseDraft;
