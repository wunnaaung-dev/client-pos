import { ColumnDef } from "@tanstack/react-table";
import { Customer } from "../types/customer";


export const customerMockData: Customer[] = [
    {
        name: "John Doe",
        phone: "123-456-7890",
        type: "Regular",
        address: "123 Main St, Anytown, USA",
    },
    {
        name: "Jane Smith",
        phone: "987-654-3210",
        type: "New",
        address: "456 Elm St, Othertown, USA",
    },
    {
        name: "Alice Johnson",
        phone: "555-123-4567",
        type: "Regular",
        address: "789 Oak St, Sometown, USA",
    },
];

export const customerTableColumns: ColumnDef<Customer>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "type",
        header: "Type",
        cell: ({ row }) => {
            const customerType = row.getValue("type") as Customer["type"];
            const colorMap: Record<Customer["type"], string> = {
                Regular: "bg-blue-100 text-blue-700",
                New: "bg-green-100 text-green-700",
            };

            return (
                <span
                    className={`px-2 py-1 rounded-sm text-sm font-medium ${colorMap[customerType]}`}
                >
                    {customerType}
                </span>
            );
        },
    },
];