import { ColumnDef } from "@tanstack/react-table";
import { Stock } from "../../types/stock";
import { useMemo } from "react";
import { DataTable } from "../../components/data-table/data-table";
import { format } from "date-fns";
import { stockOutMockData } from "../../mockData/stockMock";

const StockOutTable = () => {
    const columns: ColumnDef<Stock>[] = useMemo(() => {
        return [
            { accessorKey: "no", header: "No", cell: (info) => info.row.index + 1 },
            { accessorKey: "productName", header: "Product Name" },
            { accessorKey: "stockOutQty", header: "Quantity" },
            {
                accessorKey: "stockOutDate",
                header: "Date",
                cell: (info) => {
                    const date = info.getValue<Date>();
                    return format(date, "dd.MM.yyyy");
                },
            },
        ];
    }, []);

    return <DataTable data={stockOutMockData} columns={columns} />;
};

export default StockOutTable;
