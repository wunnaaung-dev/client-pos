export type ProductCategory = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
};

export type ProductCategoryDTO = Pick<ProductCategory, "name">;
