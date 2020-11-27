import { Product } from "../Product";
import { SpecialOfferType } from "../SpecialOfferType";
import { NForAmount } from "./NForAmount";

export class FiveForAmount extends NForAmount {

    public constructor(
        public readonly product: Product,
        public readonly amount: number) {
            super(SpecialOfferType.FiveForAmount, product, amount);
    }

    getN() {
        return 5;
    }
}