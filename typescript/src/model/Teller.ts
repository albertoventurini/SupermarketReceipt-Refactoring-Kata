import {SupermarketCatalog} from "./SupermarketCatalog"
import {OffersByProduct, ShoppingCart} from "./ShoppingCart"
import {Product} from "./Product"
import {Receipt} from "./Receipt"
import {Offer, SpecialOffer} from "./Offer"
import {SpecialOfferType} from "./SpecialOfferType"

export class Teller {

    private offers: OffersByProduct = {};

    public constructor(private readonly catalog: SupermarketCatalog ) {
    }

    public addSpecialOffer(offer: SpecialOffer): void {
        this.offers[offer.product.name] = offer;
    }

    public checksOutArticlesFrom(theCart: ShoppingCart): Receipt {
        const receipt = new Receipt();
        const productQuantities = theCart.getItems();
        for (let pq of productQuantities) {
            let p = pq.product;
            let quantity = pq.quantity;
            let unitPrice = this.catalog.getUnitPrice(p);
            let price = quantity * unitPrice;
            receipt.addProduct(p, quantity, unitPrice, price);
        }
        theCart.handleOffers(receipt, this.offers, this.catalog);

        return receipt;
    }

}
