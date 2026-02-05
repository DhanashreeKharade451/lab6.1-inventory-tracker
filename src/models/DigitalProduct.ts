import type { DiscountableProduct } from "./DiscountableProduct ";
import { Product } from "./Product";

export class DigitalProduct extends Product implements DiscountableProduct{
  fileSize: number;

  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }
  getFileSize(): number {
    return this.fileSize;
  }
  setFileSize(fileSize: number) {
    this.fileSize = fileSize;
  }
  getPriceWithTax(): number {
    return this.price;
  }
  applyDiscount(): any{
    console.log("Digital Product Price Before Discount: $",this.price)
    return this.price * 0.75;
  }
}

// const digitalproduct1 = new DigitalProduct("SKU-111", "HP Laptop", 1200, 250);
// console.log("Price without Tax: ", digitalproduct1.getPriceWithTax());
// console.log("Digital Product File Size: ", digitalproduct1.getFileSize(),"MB");