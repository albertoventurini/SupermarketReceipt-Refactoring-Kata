import { Product } from "../Product";
import { NForAmount } from "./NForAmount";

export class FiveForAmount extends NForAmount {

    public constructor(
        public readonly product: Product,
        public readonly amount: number) {
            super(product, amount);
    }

    getN() {
        return 5;
    }
}