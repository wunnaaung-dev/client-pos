export type Order = {
    productCode: string;
    productName: string;
    quantity: number;
    price: number
    subtotal: number;
}

export type POSCart = {
    orders: Order[];
    customer: string;
    totalQty: number;
    subTotal: number;
    total: number;
    shipping?: number;
}