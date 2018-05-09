import {CatalogItems} from "./catalogItems";

export class Shelf<T extends CatalogItems> {
    private items: Array<T>;

    add(newItem: T) {
        this.items.push(newItem);
    }

    getFirstItem(): T {
        return this.items[0];
    }
}