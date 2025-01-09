import { api } from "."
import { Product, ProductDTO } from "../types/product"

export type ProductRes = {
    current_page: number
    data: {
        data: Product[] | Product
    }
}

export const productService = {
    getProducts: async () => {
        try {
            const response = await api.get<ProductRes>("/products")
            return response.data
        } catch (error) {
            console.log("error in products", error)
            throw error
        }
    },
    createProduct:  async(product: ProductDTO) => {
        try {
            const response = await api.post<ProductRes>("/products", product)
            return response.data
        } catch (error) {
            console.error("error in product create", error)
        }
    },
    updateProduct: async(id: string, product: ProductDTO) => {
        try {
            const response = await api.patch<ProductRes>(`/products/${id}`, product)
            return response.data
        } catch (error) {
            console.error("error in product update", error)
        }
    } 
}