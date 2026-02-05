// utils/productSorter.ts
import { Product } from "../models/Product";

export const sortProductsByNameAndPrice = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => {
    const nameCompare = a.name.localeCompare(b.name);
    if (nameCompare !== 0) {
      return nameCompare;
    }
    return a.price - b.price;
  });
};
