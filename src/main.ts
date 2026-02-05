// import { Product } from "./models/Product";
// import { calculateTax } from "./utils/taxCalculator";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import type { Product } from "./models/Product";
import { calculateTax } from "./utils/taxCalculator";
import { sortProductsByNameAndPrice } from "./utils/productSorter";

const productList: Product[] = []

const pProduct = new PhysicalProduct("SKU0002", "MacBook", 1500, 0.5);
const dProduct = new DigitalProduct("SKU0003", "MS-Windows11", 250, 500);

productList.push(pProduct);
productList.push(dProduct);
console.log("===============================================================================");
console.log("#     Product Details: Price with and without tax                             #");
console.log("===============================================================================");
productList.forEach(prd => {
    console.log(`Product SKU: ${prd.sku}`)
    console.log(`Product Name: ${prd.name}`)
    console.log(`Price without tax :$ ${prd.price}`)
    console.log(`Price with tax :$`, calculateTax(prd))
    
});
console.log("Price of Digital Product after 25% discount:$",dProduct.applyDiscount())
const sortedProducts = sortProductsByNameAndPrice(productList);
console.log("===============================================================================");
console.log("#     Below is result of the sortProductsByNameAndPrice                       #");
console.log("===============================================================================");
sortedProducts.forEach(prd => {
    console.log(`Product Name: ${prd.name}`)
    console.log(`Price without tax :$ ${prd.price}`)
});
// console.log(pProduct.displayDetails());
// console.log( pProduct.getPriceWithTax());
//console.log(productList);


// dProduct.displayDetails()
// pProduct.getPriceWithTax()