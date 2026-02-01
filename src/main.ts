// import { Product } from "./models/Product";
// import { calculateTax } from "./utils/taxCalculator";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";

const productList =  []


const pProduct = new PhysicalProduct("SKU0002", "MacBook", 1500, 0.5);
const dProduct = new DigitalProduct("SKU0003", "MS-Windows11", 250, 500);

pProduct.displayDetails()
// pProduct.getPriceWithTax()

// dProduct.displayDetails()
// pProduct.getPriceWithTax()