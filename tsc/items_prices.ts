import items from './items';

type ItemPriceDefinition = {
	name: string;
	origin: string;
	price: number;
};

type ItemDefinitions = { [key: string]: ItemPriceDefinition };

const itemDefinitions: ItemDefinitions = items.reduce((p, x) => {
	p[x.name] = x;
	return p;
}, {} as ItemDefinitions);

export const getItem = (itemName: string): ItemPriceDefinition => {
	if (itemName in itemDefinitions) {
		return itemDefinitions[itemName];
	}

	return {
		name: itemName,
		price: 0,
		origin: 'unknown'
	};
};
