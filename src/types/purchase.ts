export interface Purchase {
    date: Date
    voucher_number: string
    supplier: string
    purchased_product: PurchaseProduct
    totalPrice: number
}

interface PurchaseProduct {
    productId: string
    productName: string
    qty: number
    unitPrice: number
}