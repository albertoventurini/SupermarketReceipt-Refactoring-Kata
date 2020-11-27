import {Product} from "./Product"
import {SpecialOfferType} from "./SpecialOfferType"
import {Discount} from "./Discount";
import {SupermarketCatalog} from "./SupermarketCatalog";

export interface SpecialOffer {
    readonly product: Product

    apply(catalog: SupermarketCatalog, quantity: number): Discount | null
}

export class Offer implements SpecialOffer {

    public constructor(public readonly offerType: SpecialOfferType,
                       public readonly product: Product,
                       public readonly argument: number) {
    }

    apply(catalog: SupermarketCatalog, quantity: number): Discount | null {
        const unitPrice: number= catalog.getUnitPrice(this.product);
        let discount : Discount|null = null;
        let x = 1;
        if (this.offerType == SpecialOfferType.ThreeForTwo) {
            x = 3;

        } else if (this.offerType == SpecialOfferType.TwoForAmount) {
            x = 2;
            if (quantity >= 2) {
                const total = this.argument * Math.floor(quantity / x) + quantity % 2 * unitPrice;
                const discountN = unitPrice * quantity - total;
                discount = new Discount(this.product, "2 for " + this.argument, discountN);
            }

        } if (this.offerType == SpecialOfferType.FiveForAmount) {
            x = 5;
        }
        const numberOfXs = Math.floor(quantity / x);
        if (this.offerType == SpecialOfferType.ThreeForTwo && quantity > 2) {
            const discountAmount = quantity * unitPrice - ((numberOfXs * 2 * unitPrice) + quantity % 3 * unitPrice);
            discount = new Discount(this.product, "3 for 2", discountAmount);
        }
        if (this.offerType == SpecialOfferType.TenPercentDiscount) {
            discount = new Discount(this.product, this.argument + "% off", quantity * unitPrice * this.argument / 100.0);
        }
        if (this.offerType == SpecialOfferType.FiveForAmount && quantity >= 5) {
            const discountTotal = unitPrice * quantity - (this.argument * numberOfXs + quantity % 5 * unitPrice);
            discount = new Discount(this.product, x + " for " + this.argument, discountTotal);
        }
        return discount
    }

}
