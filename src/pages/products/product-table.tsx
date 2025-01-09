import { ReactNode, useEffect, useMemo } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog";
import { DataTable } from "../../components/data-table/data-table";
import AlertDialog from "../../components/shared/alert_dialog";
import useProductsHook from "../../hooks/useProductsHook";
import { ColumnDef } from "@tanstack/react-table";
import { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";
import Edit from "../../components/shared/Edit";
import Delete from "../../components/shared/Delete";

const ProductsTable = () => {
    const { products, handleSetProduct, handleFetchProducts } = useProductsHook();
    const navigate = useNavigate()

    useEffect(() => {
        handleFetchProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const columns: ColumnDef<Product>[] = useMemo(() => {
        return [
            { accessorKey: "no", header: "No", cell: (info) => info.row.index + 1 },
            { accessorKey: "name", header: "Name" },
            { accessorKey: "category.name", header: "Category" },
            { accessorKey: "color", header: "Color" },
            { accessorKey: "roll_width", header: "Roll Width" },
            { accessorKey: "length", header: "Length (ft)" },
            { accessorKey: "width", header: "Width (ft)" },
            { accessorKey: "has_string", header: "Has String", cell: (info) => (<div className="ps-3">{info.getValue() as ReactNode}</div>) },
            { accessorKey: "product_code", header: "Product Code" },
            { accessorKey: "price_per_roll", header: "Price Per Roll" },
            { accessorKey: "price_per_yard", header: "Price Per Yard" },
            { accessorKey: "wholesale_price", header: "Wholesale Price" },
            { accessorKey: "retail_price", header: "Retail Price" },
            {
                accessorKey: "stock.quantity",
                header: "Remaining Quantity",
                cell: (info) => (
                    <div className="text-right pr-9">
                        {info.getValue() as React.ReactNode}
                    </div>
                ),
            },
            {
                header: "Actions",
                cell: (info) => {
                    const product = info.row.original;

                    const handleOnEditSelect = () => {
                        handleSetProduct(product)
                        navigate("/products/edit")
                    }
                    return (
                        <div className="flex">
                            {/* Edit Dialog */}
                            <Edit onClick={handleOnEditSelect} />
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div>
                                        <Delete />
                                    </div>
                                </DialogTrigger>
                                <DialogContent>
                                    <AlertDialog
                                        type="delete"
                                        dialogTitle="Delete Product"
                                        onClick={() => { }}
                                    >
                                        <div className="flex flex-col justify-center items-center">
                                            <p>This action cannot be undone. Are you sure you want to delete this product</p>
                                        </div>
                                    </AlertDialog>
                                </DialogContent>
                            </Dialog>
                        </div>
                    );
                },
            },
        ];
    }, [handleSetProduct, navigate]);

    return <DataTable data={products} columns={columns} />;
};

export default ProductsTable;
