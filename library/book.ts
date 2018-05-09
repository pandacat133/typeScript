import {Category} from "./category";
import {CatalogItems} from "./catalogItems";

export interface Book extends CatalogItems {
    id: number,
    title: string,
    author: string,
    available: boolean,
    category: Category
}