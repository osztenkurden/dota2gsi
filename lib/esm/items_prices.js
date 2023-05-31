import items from './items.js';
const itemDefinitions = items.reduce((p, x) => {
    p[x.name] = x;
    return p;
}, {});
export const getItem = (itemName) => {
    if (itemName in itemDefinitions) {
        return itemDefinitions[itemName];
    }
    return {
        name: itemName,
        price: 0,
        origin: 'unknown'
    };
};
