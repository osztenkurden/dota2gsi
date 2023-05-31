"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItem = void 0;
const items_1 = __importDefault(require("./items"));
const itemDefinitions = items_1.default.reduce((p, x) => {
    p[x.name] = x;
    return p;
}, {});
const getItem = (itemName) => {
    if (itemName in itemDefinitions) {
        return itemDefinitions[itemName];
    }
    return {
        name: itemName,
        price: 0,
        origin: 'unknown'
    };
};
exports.getItem = getItem;
