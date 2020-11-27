import {Product} from "./Product"
import {Discount} from "./Discount";
import {SupermarketCatalog} from "./SupermarketCatalog";

export interface SpecialOffer {
    readonly product: Product

    apply(catalog: SupermarketCatalog, quantity: number): Discount | null
}
