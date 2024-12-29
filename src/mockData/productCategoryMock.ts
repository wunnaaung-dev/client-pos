interface ProductCategory {
    no: number
    category_name: string;
    count: number;
}

export const productCategoryMock: ProductCategory[] = [
    { no: 1, category_name: 'Electronics', count: 120 },
    { no: 2, category_name: 'Books', count: 80 },
    { no: 3, category_name: 'Clothing', count: 150 },
    { no: 4, category_name: 'Home & Kitchen', count: 60 },
    { no: 5, category_name: 'Sports', count: 40 }
];
export const productCategoryColumns = [
    { accessorKey: "no", header: "No" },
    { accessorKey: "category_name", header: "Category Name" },
    { accessorKey: "count", header: "Count" }
];

