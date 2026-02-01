import { Product } from "../models/Product";
export const name = "utility";

//accessing prod object from product
export function calculateTax(prod : Product): number {
    return prod.price + (prod.price * Product.taxRate);     
}