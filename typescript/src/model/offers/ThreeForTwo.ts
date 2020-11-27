import { Discount } from "../Discount";
import { Offer } from "../Offer";
import { Product } from "../Product";
import { SpecialOfferType } from "../SpecialOfferType";
import { SupermarketCatalog } from "../SupermarketCatalog";

export class ThreeForTwo extends Offer {
    public constructor(
        public readonly product: Product,
        public readonly amount: number) {
        super(SpecialOfferType.ThreeForTwo, product, amount);
    }

    apply(catalog: SupermarketCatalog, quantity: number): Discount | null {
        const unitPrice: number= catalog.getUnitPrice(this.product);
        let discount : Discount|null = null;
        const x = 3;
        const numberOfXs = Math.floor(quantity / x);
        if (quantity > 2) {
            const discountAmount = quantity * unitPrice - ((numberOfXs * 2 * unitPrice) + quantity % 3 * unitPrice);
            discount = new Discount(this.product, "3 for 2", discountAmount);
        }
        return discount
    }
}