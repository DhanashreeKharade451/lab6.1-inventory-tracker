export interface DiscountableProduct {
    discount: number ;
    applyDiscount: () => any;
}

let dgDiscount = { discount: 0.25 };