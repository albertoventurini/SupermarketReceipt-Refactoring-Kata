import { Discount } from "../Discount";
import { Product } from "../Product";
import { SupermarketCatalog } from "../SupermarketCatalog";
import {SpecialOffer} from "../Offer";

export class ThreeForTwo implements SpecialOffer {
    public constructor(
        public readonly product: Product) {
    }

    apply(catalog: SupermarketCatalog, quantity: number): Discount | null {
        const unitPrice: number= catalog.getUnitPrice(this.product);
        let discount : Discount|null = null;
        const x = 3;
        const y = 2;
        const numberOfXs = Math.floor(quantity / x);
        if (quantity > y) {
            const discountAmount = quantity * unitPrice - ((numberOfXs * y * unitPrice) + quantity % x * unitPrice);
            discount = new Discount(this.product, `${x} for ${y}`, discountAmount);
        }
        return discount
    }
}