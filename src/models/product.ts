export default class product {
    public static taxRate = 0.1;
    sku: string;
    name: string;
    price: number;

constructor(sku:string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
}

displayDetails():string{
    return `Product Name: ${this.name} SKU:${this.sku} PRICE: $${this.price}`;
}

getPriceWithTax():number{
    
    return (this.price * Product.taxRate);
}
}