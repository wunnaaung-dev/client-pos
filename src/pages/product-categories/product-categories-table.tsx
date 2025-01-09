import { useEffect, useMemo } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog";
import { DataTable } from "../../components/data-table/data-table";
import AlertDialog from "../../components/shared/alert_dialog";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import Edit from "../../components/shared/Edit";
import Delete from "../../components/shared/Delete";
import useProductCategoryHook from "../../hooks/useProductCategoryHook";
import { ProductCategory } from "../../types/productCategory";

const ProductCategoriesTable = () => {
    const { productCategories, handleFetchProductCategories } = useProductCategoryHook();
    useEffect(() => {
        handleFetchProductCategories()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const navigate = useNavigate();
    const columns: ColumnDef<ProductCategory>[] = useMemo(() => {
        return [
            { accessorKey: "no", header: "No", cell: (info) => info.row.index + 1 },
            { accessorKey: "name", header: "Category Name" },
            // { accessorKey: "count", header: "Product Count" },
            {
                header: "Actions",
                cell: (info) => {
                    const category = info.row.original;
                    const handleOnEditSelect = () => {
                        navigate("/categories/edit");
                    };

                    return (
                        <div className="flex items-center justify-center">
                            {/* Edit Dialog */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div>
                                        <Edit onClick={handleOnEditSelect} />
                                    </div>
                                </DialogTrigger>
                                <DialogContent>
                                    
                                </DialogContent>
                            </Dialog>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div>
                                        <Delete />
                                    </div>
                                </DialogTrigger>
                                <DialogContent>
                                    <div>
                                        <AlertDialog
                                            type="delete"
                                            dialogTitle="Delete Category"
                                            onClick={() => { }}
                                        >
                                            <div className="flex flex-col justify-center items-center">
                                                <p>This action cannot be undone. Are you sure you want to delete this category?</p>
                                            </div>
                                        </AlertDialog>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    );
                },
            },
        ];
    }, [navigate]);

    return <DataTable data={productCategories} columns={columns} />;
};

export default ProductCategoriesTable;
