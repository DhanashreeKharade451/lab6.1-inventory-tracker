// utils/discountCalculator.ts
import { PhysicalProduct } from "../models/PhysicalProduct";
import { Product } from "../models/Product";


export const BULK_DISCOUNT_RULES = {
  minQuantity: 10,        // quantity-based discount
  minTotalWeight: 20,     // weight-based discount (kg)
  discountPercent: 10     // 10% discount
};

const isPhysicalProduct = (product: Product): product is PhysicalProduct => {
  return (product as PhysicalProduct).weight !== undefined;
};

export const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => {
    let productTotal = product.price;

    if (isPhysicalProduct(product)) {
      productTotal *= product.quantity;

      const totalWeight = product.weight * product.quantity;

      const isBulkEligible =
        product.quantity >= BULK_DISCOUNT_RULES.minQuantity ||
        totalWeight >= BULK_DISCOUNT_RULES.minTotalWeight;

      if (isBulkEligible) {
        productTotal *=
          (1 - BULK_DISCOUNT_RULES.discountPercent / 100);
      }
    }
    console.log("Total Price:::",productTotal)
    return total + productTotal;
  }, 0);
};
