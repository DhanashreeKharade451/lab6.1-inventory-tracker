import product from "./product";
class PhysicalProduct extends product {
 // public static taxRate = 0.1;
  weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  getPriceWithTax(): number {
    return this.price + this.price * PhysicalProduct.taxRate;
  }
}
