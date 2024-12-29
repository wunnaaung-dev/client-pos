import { useMemo } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog";
import { DataTable } from "../../components/data-table/data-table";
import AlertDialog from "../../components/shared/alert_dialog";
import useProductsHook from "../../hooks/useProductsHook";
import { ColumnDef } from "@tanstack/react-table";
import { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";

const ProductsTable = () => {
    const { products, handleDeleteProduct, handleSetProduct } = useProductsHook();
    const navigate = useNavigate()
    const columns: ColumnDef<Product>[] = useMemo(() => {
        return [
            { accessorKey: "no", header: "No", cell: (info) => info.row.index + 1 },
            { accessorKey: "name", header: "Name" },
            { accessorKey: "category", header: "Category" },
            { accessorKey: "availableColors", header: "Available Colors" },
            { accessorKey: "roll_width", header: "Roll Width (အလျား)" },
            { accessorKey: "length", header: "Length" },
            { accessorKey: "width", header: "Width" },
            { accessorKey: "has_string", header: "Has String" },
            { accessorKey: "product_code", header: "Product Code" },
            { accessorKey: "price_per_roll", header: "Price Per Roll" },
            { accessorKey: "price_per_yard", header: "Price Per Yard" },
            { accessorKey: "wholesale_price", header: "Wholesale Price" },
            { accessorKey: "retail_price", header: "Retail Price" },
            {
                header: "Actions",
                cell: (info) => {
                    const product = info.row.original;

                    const handleOnEditSelect = () => {
                        handleSetProduct(product)
                        navigate("/products/edit")
                    }
                    return (
                        <div className="flex items-center gap-4">
                            {/* Edit Dialog */}

                            <Pencil className="text-violet-600 cursor-pointer" onClick={handleOnEditSelect}/>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Trash2 className="text-red-600 cursor-pointer" />
                                </DialogTrigger>
                                <DialogContent>
                                    <AlertDialog
                                        type="delete"
                                        dialogTitle="Delete Product"
                                        onClick={() => handleDeleteProduct(product.productId)}
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
    }, [handleDeleteProduct]);

    return <DataTable data={products} columns={columns} />;
};

export default ProductsTable;
