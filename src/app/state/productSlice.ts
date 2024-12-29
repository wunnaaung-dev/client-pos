import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HasString, Product, ProductDTO } from "../../types/product";

interface ProductState {
    products: Product[];
    selectedProduct: Product | null;
}

const initialState: ProductState = {
    products: [
        {
            productId: "PD101",
            name: "Fabric Roll A",
            category: "Cotton",
            availableColors: "Red, Blue, Green",
            width: 45,
            roll_width: 45,
            length: 20,
            has_string: HasString.S,
            measurement_per_unit: 12,
            product_code: "PC123",
            price_per_roll: 100,
            price_per_yard: 5,
            wholesale_price: 90,
            retail_price: 110,
            discount: "10%",
        },
        {
            productId: "PD102",
            name: "Fabric Roll B",
            category: "Cotton",
            availableColors: "Red, Blue, Green",
            width: 45,
            roll_width: 45,
            length: 20,
            has_string: HasString.S,
            measurement_per_unit: 12,
            product_code: "PC123",
            price_per_roll: 100,
            price_per_yard: 5,
            wholesale_price: 90,
            retail_price: 110,
            discount: "10%",
        },
        {
            productId: "PD103",
            name: "Fabric Roll C",
            category: "Cotton",
            availableColors: "Red, Blue, Green",
            width: 45,
            roll_width: 45,
            length: 20,
            has_string: HasString.S,
            measurement_per_unit: 12,
            product_code: "PC123",
            price_per_roll: 100,
            price_per_yard: 5,
            wholesale_price: 90,
            retail_price: 110,
            discount: "10%",
        },
    ],
    selectedProduct: null,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<ProductDTO>) => {
            const newProduct: Product = {
                productId: `PD${Date.now()}`,
                ...action.payload,
            };
            state.products.push(newProduct);
        },
        updateProduct: (state, action: PayloadAction<Product>) => {
            const index = state.products.findIndex((product) => product.productId === action.payload.productId);
            if (index !== -1) {
                state.products[index] = { ...state.products[index], ...action.payload };
            }
        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((product) => product.productId !== action.payload);
        },
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
        setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
            state.selectedProduct = action.payload;
        },
    },
});

export const { addProduct, updateProduct, deleteProduct, setProducts, setSelectedProduct } = productSlice.actions;

interface RootState {
    products: ProductState;
}

export const selectProducts = (state: RootState): Product[] => state.products.products;
export const selectSelectedProduct = (state: RootState): Product | null => state.products.selectedProduct;

export default productSlice.reducer;
