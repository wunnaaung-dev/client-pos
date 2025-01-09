import { Supplier, SupplierType } from "../types/supplier";

export const supplierMock: Supplier[] = [
    {
        name: "U Aung",
        phone: "09790000000",
        address: "Yangon",
        type: SupplierType.regular
    },
    {
        name: "U Kyaw",
        phone: "0987777",
        address: "Yangon",
        type: SupplierType.new
    },
    {
        name: "U Aung Kyaw",
        phone: "09790000000",
        address: "Yangon",
        type: SupplierType.regular
    },
]