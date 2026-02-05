
export class Product {
  public static taxRate = 0.1;
  public sku: string;
  public name: string;
  public price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }
  displayDetails(): string {
    return `Product Name: ${this.name} SKU:${this.sku} PRICE: $${this.price}`;
  }
  getPriceWithTax(): number {
    return this.price + (this.price * Product.taxRate);
  }
}

//created object withname prod
//  const prod = new Product("SKU-0001","HP NoteBook", 1000);
//  console.log(prod.displayDetails());