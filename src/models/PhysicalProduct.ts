import { Product } from "./Product";

export class PhysicalProduct extends Product {
  public static taxRate = 0.1;
  public weight: number;

  public getWeight(): number {
    return this.weight;
  }
  public setWeight(value: number) {
    this.weight = value;
  }

  constructor(sku: string, name: string, price: number, quantity: number, weight: number) {
    super(sku, name, price, quantity);
    this.weight = weight;
  }
  getPriceWithTax(): number {
    return this.price + (this.price * Product.taxRate);
  }
}


// const product1 = new PhysicalProduct("SKU-111", "HP Laptop", 1200, 2.5);
// console.log("Price with 10% Tax:", product1.getPriceWithTax());
