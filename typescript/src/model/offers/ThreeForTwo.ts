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
        const y = 2;
        const numberOfXs = Math.floor(quantity / x);
        if (quantity > y) {
            const discountAmount = quantity * unitPrice - ((numberOfXs * y * unitPrice) + quantity % x * unitPrice);
            discount = new Discount(this.product, `${x} for ${y}`, discountAmount);
        }
        return discount
    }
}