// import { Product } from "./models/Product";
// import { calculateTax } from "./utils/taxCalculator";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import type { Product } from "./models/Product";
import { calculateTax } from "./utils/taxCalculator";
import { sortProductsByNameAndPrice } from "./utils/productSorter";
import { calculateTotalPrice } from "./utils/discountCalculator";

const productList: Product[] = []

const pProduct = new PhysicalProduct("SKU0002", "MacBook", 1500, 10, 0.5);
const dProduct = new DigitalProduct("SKU0003", "MS-Windows11", 250, 25, 500);

productList.push(pProduct);
productList.push(dProduct);
console.log("===============================================================================");
console.log("#     Product Details: Price with and without tax                             #");
console.log("===============================================================================");
productList.forEach(prd => {
    console.log(`Product SKU: ${prd.sku}`)
    console.log(`Product Name: ${prd.name}`)
    console.log(`Price without tax :$${prd.price}`)
    console.log(`Quantity: ${prd.quantity}`)
    console.log(`Price with tax :$`,calculateTax(prd))
    
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
console.log("===============================================================================");
console.log("#     Below is result of the Bulk discount on quantity                        #");
console.log("===============================================================================");
const total = calculateTotalPrice(productList);
console.log(total);
// console.log(pProduct.displayDetails());
// console.log( pProduct.getPriceWithTax());
//console.log(productList);


// dProduct.displayDetails()
// pProduct.getPriceWithTax()