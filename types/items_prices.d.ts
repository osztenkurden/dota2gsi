declare type ItemPriceDefinition = {
    name: string;
    origin: string;
    price: number;
};
export declare const getItem: (itemName: string) => ItemPriceDefinition;
export {};
