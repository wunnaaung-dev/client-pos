import { Stock } from "./stock";

export interface Product {
    id: number | string;
    name: string;
    category_id: string; 
    color?: string
    roll_width: number;
    length: number;
    width: number;
    has_string: HasString
    measurement_per_unit: number;
    product_code?: string;
    price_per_roll: number;
    price_per_yard: number;
    wholesale_price: number;
    retail_price: number;
    discount?: number;
    quantity: number;
    minimum_qty: number
    stock?: Stock
}

export type ProductDTO = Omit<Product, "id">;

export enum HasString {
    S = "S",
    N = "N"
}
