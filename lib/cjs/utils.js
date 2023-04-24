"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNeutralItems = exports.parseRunes = exports.parseOutposts = exports.parseCourier = exports.parseDraft = exports.parseBuilding = exports.parseMap = exports.parseTeam = exports.parsePlayer = void 0;
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
const getPlayersCourier = (id, couriers, lastCouriers) => {
    for (const courier in couriers) {
        if (Number(couriers[courier].owner) === id)
            return exports.parseCourier(couriers[courier], lastCouriers[id]);
    }
    return undefined;
};
const parsePlayer = (basePlayer, id, data, extensions, lastData) => {
    const extension = extensions.find(player => player.steamid === basePlayer.steamid);
    const identifier = `player${id}`;
    const targetHero = data.hero.team2[identifier] || data.hero.team3[identifier] || null;
    const player = {
        ...basePlayer,
        id,
        hero: targetHero,
        abilities: getPlayersAttibute(id, data, 'abilities'),
        items: getPlayersAttibute(id, data, 'items'),
        wearables: getPlayersAttibute(id, data, 'wearables'),
        name: (extension && extension.name) || basePlayer.name,
        defaultName: basePlayer.name,
        country: (extension && extension.country) || null,
        avatar: (extension && extension.avatar) || null,
        extra: (extension && extension.extra) || {},
        realName: (extension && extension.realName) || null,
        courier: getPlayersCourier(id, data.couriers, lastData ? lastData.players.flatMap(x => (x.courier ? [x.courier] : [])) : []) || null,
        kill_list: []
    };
    for (const [key, value] of Object.entries(basePlayer.kill_list || {})) {
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
    name: (extension && extension.name) || type.toUpperCase(),
    map_score: (extension && extension.map_score) || 0,
    extra: (extension && extension.extra) || {},
    id: (extension && extension.id) || null,
    country: (extension && extension.country) || null,
    logo: (extension && extension.logo) || null
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
const parseCourier = (courier, lastCourier) => {
    const items = [];
    for (const item in courier.items) {
        items.push(courier.items[item]);
    }
    let lostItems = [];
    if (!courier.alive && lastCourier) {
        if (!lastCourier.alive) {
            lostItems = lastCourier.lost_items;
        }
        else {
            lostItems = lastCourier.items;
        }
    }
    return {
        ...courier,
        items: items.map(x => ({
            name: x.name,
            owner: Number(x.owner)
        })),
        team: Number(courier.owner) >= 0 && Number(courier.owner) < 5 ? 'radiant' : 'dire',
        owner: Number(courier.owner),
        lost_items: lostItems
    };
};
exports.parseCourier = parseCourier;
const parseOutposts = (minimap) => {
    if (!minimap)
        return {};
    const outposts = Object.values(minimap).filter(x => x.unitname === 'npc_dota_watch_tower');
    const outsideNorth = outposts.find(x => x.ypos > 6000);
    const jungleNorth = outposts.find(x => x.ypos > 0 && x.ypos < 6000);
    const jungleSouth = outposts.find(x => x.ypos > -6000 && x.ypos < 0);
    const outsideSouth = outposts.find(x => x.ypos < -6000);
    return {
        outsideNorth: !(outsideNorth && outsideNorth.team) ? undefined : outsideNorth.team === 2 ? 'radiant' : 'dire',
        jungleNorth: !(jungleNorth && jungleNorth.team) ? undefined : jungleNorth.team === 2 ? 'radiant' : 'dire',
        jungleSouth: !(jungleSouth && jungleSouth.team) ? undefined : jungleSouth.team === 2 ? 'radiant' : 'dire',
        outsideSouth: !(outsideSouth && outsideSouth.team) ? undefined : outsideSouth.team === 2 ? 'radiant' : 'dire'
    };
};
exports.parseOutposts = parseOutposts;
const BOUNTY_RUNE_SPAWN_TIME_SEC = 180;
const nextBountyRuneTime = (currentTime) => {
    let nextRune = Math.floor(currentTime.clockTime / BOUNTY_RUNE_SPAWN_TIME_SEC) * BOUNTY_RUNE_SPAWN_TIME_SEC;
    if (currentTime.clockTime > nextRune)
        nextRune += BOUNTY_RUNE_SPAWN_TIME_SEC;
    return nextRune - currentTime.clockTime + currentTime.gameTime;
};
const nextBountyRune = (currentTime) => {
    return { nextAppearsAt: nextBountyRuneTime(currentTime), exists: false };
};
const POWER_RUNE_SPAWN_TIME_SEC = 120;
const nextPowerRuneTime = (currentTime) => {
    if (currentTime.clockTime < 0)
        return 120 + (currentTime.gameTime - currentTime.clockTime);
    let nextRune = Math.floor(currentTime.clockTime / POWER_RUNE_SPAWN_TIME_SEC) * POWER_RUNE_SPAWN_TIME_SEC;
    if (currentTime.clockTime > nextRune)
        nextRune += POWER_RUNE_SPAWN_TIME_SEC;
    return nextRune - currentTime.clockTime + currentTime.gameTime;
};
const nextPowerRune = (currentTime) => {
    return { nextAppearsAt: nextPowerRuneTime(currentTime), exists: false };
};
const checkBountyRune = (rune, currentTime) => {
    if (rune.nextAppearsAt && rune.nextAppearsAt > currentTime.gameTime) {
        return {
            type: 'bounty',
            exists: true,
            appearedAt: rune.nextAppearsAt,
            nextAppearsAt: nextBountyRuneTime(currentTime)
        };
    }
    return {
        ...rune
    };
};
const checkPowerRune = (rune, currentTime) => {
    if (!rune) {
        return nextPowerRune(currentTime);
    }
    if (rune.nextAppearsAt && rune.nextAppearsAt > currentTime.gameTime) {
        return {
            type: undefined,
            exists: true,
            appearedAt: rune.nextAppearsAt,
            nextAppearsAt: nextPowerRuneTime(currentTime)
        };
    }
    return {
        ...rune
    };
};
const updateRunesTick = (currentTime, lastRunes) => {
    if (!lastRunes) {
        return {
            rightBounty: nextBountyRune(currentTime),
            rightPower: nextPowerRune(currentTime),
            leftBounty: nextBountyRune(currentTime),
            leftPower: nextPowerRune(currentTime)
        };
    }
    return {
        rightBounty: checkBountyRune(lastRunes.rightBounty, currentTime),
        leftBounty: checkBountyRune(lastRunes.leftBounty, currentTime),
        leftPower: checkPowerRune(lastRunes.leftPower, currentTime),
        rightPower: checkPowerRune(lastRunes.rightPower, currentTime)
    };
};
const distanceTo = (x1, y1, x2, y2) => {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
};
const findBountyRuneByPlayer = (player) => {
    const leftRuneX = -200; // Can be just approx, as pickup range is only 150.
    const leftRuneY = -4000;
    const rightRuneX = 200;
    const rightRuneY = 4000;
    if (!player ||
        !player.hero ||
        player.hero.xpos === null ||
        player.hero.xpos === undefined ||
        player.hero.ypos === null ||
        player.hero.ypos === undefined) {
        return 'unknown';
    }
    if (distanceTo(leftRuneX, leftRuneY, player.hero.xpos, player.hero.ypos) <
        distanceTo(rightRuneX, rightRuneY, player.hero.xpos, player.hero.ypos)) {
        return 'left';
    }
    return 'right';
};
const parseRunes = (currentClockTime, currentGameTime, lastRunes, minimap, events, players) => {
    var _a, _b, _c, _d, _e, _f;
    const currentTime = {
        clockTime: currentClockTime,
        gameTime: currentGameTime
    };
    if ((!minimap && !events) || !lastRunes) {
        return updateRunesTick(currentTime, lastRunes);
    }
    const result = updateRunesTick(currentTime, lastRunes);
    if (events && players) {
        for (const event of events) {
            if (event.event_type === 'bounty_rune_pickup') {
                const bountyRuneEvent = event;
                const closestRune = findBountyRuneByPlayer(players.find(x => x.id === bountyRuneEvent.player_id));
                if (closestRune === 'unknown')
                    continue;
                if (closestRune === 'left' &&
                    result.leftBounty.exists &&
                    (!result.leftBounty.appearedAt || event.game_time >= result.leftBounty.appearedAt)) {
                    result.leftBounty = nextBountyRune(currentTime);
                }
                if (closestRune === 'right' &&
                    result.rightBounty.exists &&
                    (!result.rightBounty.appearedAt || event.game_time >= result.rightBounty.appearedAt)) {
                    result.rightBounty = nextBountyRune(currentTime);
                }
            }
        }
    }
    if (!minimap) {
        return result;
    }
    const runes = Object.values(minimap)
        .filter(x => x.image && x.image.startsWith('minimap_rune_'))
        .map(x => ({ type: (x.image || '').replace('minimap_rune_', ''), ypos: x.ypos }));
    if (((_a = result.leftPower) === null || _a === void 0 ? void 0 : _a.exists) && !runes.find(x => x.ypos > 0)) {
        result.leftPower = nextPowerRune(currentTime);
    }
    else if (!((_b = result.leftPower) === null || _b === void 0 ? void 0 : _b.exists) && runes.find(x => x.ypos > 0)) {
        const rune = runes.find(x => x.ypos > 0);
        if (rune) {
            result.leftPower = {
                appearedAt: (_c = result.leftPower) === null || _c === void 0 ? void 0 : _c.nextAppearsAt,
                type: rune === null || rune === void 0 ? void 0 : rune.type,
                nextAppearsAt: nextPowerRuneTime(currentTime),
                exists: true
            };
        }
    }
    if (((_d = result.rightPower) === null || _d === void 0 ? void 0 : _d.exists) && !runes.find(x => x.ypos < 0)) {
        result.rightPower = nextPowerRune(currentTime);
    }
    else if (!((_e = result.rightPower) === null || _e === void 0 ? void 0 : _e.exists) && runes.find(x => x.ypos < 0)) {
        const rune = runes.find(x => x.ypos < 0);
        if (rune) {
            result.rightPower = {
                appearedAt: (_f = result.rightPower) === null || _f === void 0 ? void 0 : _f.nextAppearsAt,
                type: rune === null || rune === void 0 ? void 0 : rune.type,
                nextAppearsAt: nextPowerRuneTime(currentTime),
                exists: true
            };
        }
    }
    return result;
};
exports.parseRunes = parseRunes;
const checkItemTier = (tier) => {
    for (const value of ['item0', 'item1', 'item2', 'item3', 'item4']) {
        if (tier[value] === undefined) {
            return false;
        }
    }
    return true;
};
const parseNeutralItems = (currentTime, neutralItems, lastNeutralItems) => {
    if (!neutralItems)
        return undefined;
    if (!lastNeutralItems)
        return neutralItems;
    const result = { ...neutralItems };
    const teams = [
        [result.team2, lastNeutralItems.team2],
        [result.team3, lastNeutralItems.team3]
    ];
    for (const [nowTeam, lastTeam] of teams) {
        for (const [tierNow, tierThen] of [
            [nowTeam.tier0, lastTeam.tier0],
            [nowTeam.tier1, lastTeam.tier1],
            [nowTeam.tier2, lastTeam.tier2],
            [nowTeam.tier3, lastTeam.tier3],
            [nowTeam.tier4, lastTeam.tier4]
        ]) {
            if (tierThen.completion_time) {
                tierNow.completion_time = tierThen.completion_time;
            }
            else if (!checkItemTier(tierThen) && checkItemTier(tierNow)) {
                tierNow.completion_time = currentTime;
            }
        }
    }
    return neutralItems;
};
exports.parseNeutralItems = parseNeutralItems;
