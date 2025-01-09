export interface Customer {
    name: string;
    phone: string;
    type: "Regular" | "New";
    address: string;
}

export type Buyer = Pick<Customer, "name" | "address">;