import { Discount } from "../Discount";
import { Offer } from "../Offer";
import { Product } from "../Product";
import { SpecialOfferType } from "../SpecialOfferType";
import { SupermarketCatalog } from "../SupermarketCatalog";

export class TwoForAmount extends Offer {

    public constructor(
        public readonly product: Product,
        public readonly amount: number) {
            super(SpecialOfferType.TwoForAmount, product, amount);
    }

    apply(catalog: SupermarketCatalog, quantity: number): Discount | null {
        const unitPrice: number= catalog.getUnitPrice(this.product);
        let discount : Discount|null = null;
        const x = 2;
        const numberOfXs = Math.floor(quantity / x);
        
        if (quantity >= x) {
            const discountTotal = unitPrice * quantity - (this.argument * numberOfXs + quantity % x * unitPrice);
            discount = new Discount(this.product, x + " for " + this.argument, discountTotal);
        }
        return discount;
    }
}