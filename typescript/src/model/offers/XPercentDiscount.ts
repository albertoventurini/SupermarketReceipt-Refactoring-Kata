import {Product} from "../Product";
import {SupermarketCatalog} from "../SupermarketCatalog";
import {Discount} from "../Discount";
import {SpecialOffer} from "../Offer";

export class XPercentDiscount implements SpecialOffer {

    public constructor(public readonly product: Product,
                       public readonly percentDiscount: number) {
    }

    apply(catalog: SupermarketCatalog, quantity: number): Discount | null {
        const unitPrice: number= catalog.getUnitPrice(this.product);
        return new Discount(this.product, this.percentDiscount + "% off", quantity * unitPrice * this.percentDiscount / 100.0);
    }

}
