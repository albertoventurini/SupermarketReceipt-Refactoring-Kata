import { Discount } from "../Discount";
import { SpecialOffer } from "../Offer";
import { Product } from "../Product";
import { SupermarketCatalog } from "../SupermarketCatalog";

export abstract class NForAmount implements SpecialOffer {

    protected constructor(
        public readonly product: Product,
        public readonly amount: number) {
    }

    protected abstract getN(): number;

    apply(catalog: SupermarketCatalog, quantity: number): Discount | null {
        const unitPrice: number= catalog.getUnitPrice(this.product);
        let discount : Discount|null = null;
        const x = this.getN();
        const numberOfXs = Math.floor(quantity / x);
        
        if (quantity >= x) {
            const discountTotal = unitPrice * quantity - (this.amount * numberOfXs + quantity % x * unitPrice);
            discount = new Discount(this.product, x + " for " + this.amount, discountTotal);
        }
        return discount;
    }
}