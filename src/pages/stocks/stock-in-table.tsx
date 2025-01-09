import { ColumnDef } from "@tanstack/react-table";
import { Stock } from "../../types/stock";
import { useMemo } from "react";
import { DataTable } from "../../components/data-table/data-table";
import { stockInMockData } from "../../mockData/stockMock";
import { format } from "date-fns";

const StockInTable = () => {
    const columns: ColumnDef<Stock>[] = useMemo(() => {
        return [
            { accessorKey: "no", header: "No", cell: (info) => info.row.index + 1 },
            { accessorKey: "productName", header: "Product Name" },
            { accessorKey: "stockInQty", header: "Quantity" },
            {
                accessorKey: "stockInDate",
                header: "Date",
                cell: (info) => {
                    const date = info.getValue<Date>();
                    return format(date, "dd.MM.yyyy");
                },
            },
        ];
    }, []);

    return <DataTable data={stockInMockData} columns={columns} />;
};

export default StockInTable;
