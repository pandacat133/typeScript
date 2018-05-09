import {CatalogItems} from "./catalogItems";

export interface Magazine extends CatalogItems{
    issueNumber: number;
    brand: string;
}