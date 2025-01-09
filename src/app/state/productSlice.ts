import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductDTO } from "../../types/product";
import { RootState } from "./store";
import { productService } from "../../api/productService";

interface ProductState {
    products: Product[];
    selectedProduct: Product | null;
    searchTerm: string
}

const initialState: ProductState = {
    products: [],
    selectedProduct: null,
    searchTerm: ""
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await productService.getProducts()
        return response.data.data
    }
)

export const createNewProduct = createAsyncThunk(
    'products/createNewProduct',
    async(productDTO: ProductDTO) => {
        const response = await productService.createProduct(productDTO)
        return response?.data.data
    }
)

export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async({ id, productDTO }: { id: string, productDTO: ProductDTO }) => {
        const response = await productService.updateProduct(id, productDTO);
        return response?.data.data;
    }
)

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
        setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
            state.selectedProduct = action.payload;
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload as Product[]
        })
        builder.addCase(createNewProduct.fulfilled, (state, action) => {
            if(Array.isArray(action.payload)) {
                state.products = [...state.products, ...action.payload]
            } else if (action.payload) {
                state.products = [...state.products, action.payload]
            }
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            if (action.payload) {
                const updatedProduct = action.payload;
                if (!Array.isArray(updatedProduct)) {
                    const index = state.products.findIndex((product: Product) => product.id === updatedProduct.id);
                    if (index !== -1) {
                        state.products[index] = updatedProduct;
                    }
                }
            }
        });
    }
});

export const { setProducts, setSelectedProduct, setSearchTerm } = productSlice.actions;



export const selectProducts = (state: RootState): Product[] => state.products.products;
export const selectSelectedProduct = (state: RootState): Product | null => state.products.selectedProduct;
export const selectProductSearchTerm = (state: RootState) : string => state.products.searchTerm

export default productSlice.reducer;
