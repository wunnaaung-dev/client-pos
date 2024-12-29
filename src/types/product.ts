export interface Product {
    productId: string
    name: string;
    category: string;
    availableColors: string;
    roll_width: number;
    length: number;
    width: number
    has_string: HasString;
    measurement_per_unit: number
    product_code: string;
    price_per_roll: number;
    price_per_yard: number;
    wholesale_price: number;
    retail_price: number;
    discount?: string;
}

export type ProductDTO = Omit<Product, "productId">;

export enum HasString {
    S = "S",
    N = "N"
}
