import {SpecialOfferType} from "../SpecialOfferType";
import {Product} from "../Product";
import {SupermarketCatalog} from "../SupermarketCatalog";
import {Discount} from "../Discount";
import {Offer} from "../Offer";

export class TenPercentDiscount extends Offer {

    public constructor(public readonly product: Product,
                       public readonly argument: number) {
        super(SpecialOfferType.TenPercentDiscount, product, argument)
    }

    apply(catalog: SupermarketCatalog, quantity: number): Discount | null {
        const unitPrice: number= catalog.getUnitPrice(this.product);
        return new Discount(this.product, this.argument + "% off", quantity * unitPrice * this.argument / 100.0);
    }

}
