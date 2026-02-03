// import { Product } from "./models/Product";
// import { calculateTax } from "./utils/taxCalculator";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import type { Product } from "./models/Product";

const productList: Product[] = []


const pProduct = new PhysicalProduct("SKU0002", "MacBook", 1500, 0.5);
const dProduct = new DigitalProduct("SKU0003", "MS-Windows11", 250, 500);

productList.push(pProduct);
productList.push(dProduct);
console.log(pProduct.displayDetails());
console.log( pProduct.getPriceWithTax());
console.log(productList);


// dProduct.displayDetails()
// pProduct.getPriceWithTax()