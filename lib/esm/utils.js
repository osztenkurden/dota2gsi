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
            return parseCourier(couriers[courier], lastCouriers[id]);
    }
    return undefined;
};
export const parsePlayer = (basePlayer, id, data, extensions, lastData) => {
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
export const parseTeam = (map, type, extension) => ({
    ward_purchase_cooldown: map[type === 'dire' ? `dire_ward_purchase_cooldown` : 'radiant_ward_purchase_cooldown'],
    name: (extension && extension.name) || type.toUpperCase(),
    map_score: (extension && extension.map_score) || 0,
    extra: (extension && extension.extra) || {},
    id: (extension && extension.id) || null,
    country: (extension && extension.country) || null,
    logo: (extension && extension.logo) || null
});
export const parseMap = (rawMap, extensions) => {
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
        dire: parseTeam(rawMap, 'dire', extensions.dire),
        radiant: parseTeam(rawMap, 'radiant', extensions.radiant)
    };
    return map;
};
export const parseBuilding = (buildingKey, building) => {
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
export const parseDraft = (draft) => {
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
export const parseCourier = (courier, lastCourier) => {
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
export const parseOutposts = (minimap) => {
    if (!minimap)
        return {};
    const outposts = Object.values(minimap).filter(x => x.unitname === 'npc_dota_watch_tower');
    const south = outposts.find(x => x.ypos > 0);
    const north = outposts.find(x => x.ypos < 0);
    return {
        south: !(south && south.team) ? undefined : south.team === 2 ? 'radiant' : 'dire',
        north: !(north && north.team) ? undefined : north.team === 2 ? 'radiant' : 'dire'
    };
};
const BOUNTY_RUNE_SPAWN_TIME_SEC = 180;
const nextBountyRuneTime = (currentClockTime, currentGameTime) => {
    let nextRune = Math.floor(currentClockTime / BOUNTY_RUNE_SPAWN_TIME_SEC) * BOUNTY_RUNE_SPAWN_TIME_SEC;
    if (currentClockTime > nextRune)
        nextRune += BOUNTY_RUNE_SPAWN_TIME_SEC;
    return nextRune - currentClockTime + currentGameTime;
};
const POWER_RUNE_SPAWN_TIME_SEC = 120;
const nextPowerRuneTime = (currentClockTime, currentGameTime) => {
    if (currentClockTime < 0)
        return 120 + (currentGameTime - currentClockTime);
    let nextRune = Math.floor(currentClockTime / POWER_RUNE_SPAWN_TIME_SEC) * POWER_RUNE_SPAWN_TIME_SEC;
    if (currentClockTime > nextRune)
        nextRune += POWER_RUNE_SPAWN_TIME_SEC;
    return nextRune - currentClockTime + currentGameTime;
};
const checkBountyRune = (rune, currentGameTime) => {
    if (typeof rune !== 'number') {
        return {
            ...rune
        };
    }
    if (currentGameTime > rune) {
        return {
            appearedAt: rune,
            type: 'bounty'
        };
    }
    return rune;
};
const updateRunesTick = (currentClockTime, currentGameTime, lastRunes) => {
    if (!lastRunes) {
        return {
            rightBounty: nextBountyRuneTime(currentClockTime, currentGameTime),
            leftBounty: nextBountyRuneTime(currentClockTime, currentGameTime)
        };
    }
    return {
        rightBounty: checkBountyRune(lastRunes.rightBounty, currentGameTime),
        leftBounty: checkBountyRune(lastRunes.leftBounty, currentGameTime)
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
export const parseRunes = (currentClockTime, currentGameTime, lastRunes, minimap, events, players) => {
    if ((!minimap && !events) || !lastRunes) {
        return updateRunesTick(currentClockTime, currentGameTime, lastRunes);
    }
    const result = updateRunesTick(currentClockTime, currentGameTime, lastRunes);
    if (events && players) {
        for (const event of events) {
            if (event.event_type === 'bounty_rune_picked') {
                const bountyRuneEvent = event;
                const closestRune = findBountyRuneByPlayer(players.find(x => x.id === bountyRuneEvent.player_id));
                if (closestRune === 'unknown')
                    continue;
                if (closestRune === 'left' &&
                    typeof result.leftBounty !== 'number' &&
                    (!result.leftBounty.appearedAt || event.game_time < result.leftBounty.appearedAt)) {
                    result.leftBounty = nextBountyRuneTime(currentClockTime, currentGameTime);
                }
                if (closestRune === 'right' &&
                    typeof result.rightBounty !== 'number' &&
                    (!result.rightBounty.appearedAt || event.game_time < result.rightBounty.appearedAt)) {
                    result.rightBounty = nextBountyRuneTime(currentClockTime, currentGameTime);
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
    if (result.leftPower && typeof result.leftPower !== 'number' && !runes.find(x => x.ypos > 0)) {
        result.leftPower = nextPowerRuneTime(currentClockTime, currentGameTime);
    }
    else if ((!result.leftPower || typeof result.leftPower === 'number') && runes.find(x => x.ypos > 0)) {
        const rune = runes.find(x => x.ypos > 0);
        if (rune) {
            result.leftPower = {
                appearedAt: typeof result.leftPower === 'number' ? result.leftPower : undefined,
                type: rune?.type
            };
        }
    }
    if (result.rightPower && !runes.find(x => x.ypos < 0)) {
        result.rightPower = nextPowerRuneTime(currentClockTime, currentGameTime);
    }
    else if ((!result.rightPower || typeof result.rightPower === 'number') && runes.find(x => x.ypos > 0)) {
        const rune = runes.find(x => x.ypos > 0);
        if (rune) {
            result.rightPower = {
                appearedAt: typeof result.rightPower === 'number' ? result.rightPower : undefined,
                type: rune?.type
            };
        }
    }
    return result;
};
const checkItemTier = (tier) => {
    for (const value of ['item0', 'item1', 'item2', 'item3', 'item4']) {
        if (tier[value] === undefined) {
            return false;
        }
    }
    return true;
};
export const parseNeutralItems = (currentTime, neutralItems, lastNeutralItems) => {
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
