import { Offer } from "../Offer";
import { Product } from "../Product";
import { SpecialOfferType } from "../SpecialOfferType";

export class FiveForAmount extends Offer {

    public constructor(
        public readonly product: Product,
        public readonly amount: number) {
            super(SpecialOfferType.FiveForAmount, product, amount);
    }

    
}