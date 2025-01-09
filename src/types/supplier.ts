export interface Supplier {
    name: string;
    phone: string;
    address: string;
    type: SupplierType;
}

export enum SupplierType {
    regular = "Regular",
    new = "New",
}