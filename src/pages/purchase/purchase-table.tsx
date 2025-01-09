import { ColumnDef } from "@tanstack/react-table";
import { Purchase } from "../../types/purchase";
import { useMemo } from "react";
import { DataTable } from "../../components/data-table/data-table";
import { mockPurchases } from "../../mockData/purchaseMock";

const PurchaseTable = () => {
  const columns: ColumnDef<Purchase>[] = useMemo(() => {
    return [
      {
        accessorKey: "date",
        header: "Date",
        cell: ({ getValue }) => {
          const date = new Date(getValue() as string);
          return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        },
      },
      { accessorKey: "voucher_number", header: "Voucher No" },
      { accessorKey: "purchased_product.productName", header: "Purchased Product" },
      { accessorKey: "purchased_product.qty", header: "Qty" },
      { accessorKey: "purchased_product.unitPrice", header: "Unit Price" },
      { accessorKey: "totalPrice", header: "Total Price" },
      { accessorKey: "supplier", header: "Supplier" },
    ];
  }, []);

  return <DataTable data={mockPurchases} columns={columns} />;
};

export default PurchaseTable;
