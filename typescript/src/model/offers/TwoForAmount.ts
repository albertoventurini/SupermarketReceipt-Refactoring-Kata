import { Product } from "../Product";
import { SpecialOfferType } from "../SpecialOfferType";
import { NForAmount } from "./NForAmount";

export class TwoForAmount extends NForAmount {

    public constructor(
        public readonly product: Product,
        public readonly amount: number) {
            super(SpecialOfferType.TwoForAmount, product, amount);
    }

    getN() {
        return 2;
    }
}