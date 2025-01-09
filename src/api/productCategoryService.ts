import { api } from "."
import { ProductCategory, ProductCategoryDTO } from "../types/productCategory";

export type ProductCategoryRes = {
    current_page: number;
    data: {
        data: ProductCategory[]
    }
};

export const productCategoryService = {
    getCategories: async() => {
        try {
            const response = await api.get<ProductCategoryRes>("/categories")
            return response.data
        } catch (error) {
            console.error("error in categories", error)
            throw error;
        }
    },
    createCategory: async(category: ProductCategoryDTO) => {
        try {
            const response = await api.post<ProductCategoryRes>("/categories", category)
            return response.data
        } catch (error) {
            console.error("error in category create", error)
        }
    }
}