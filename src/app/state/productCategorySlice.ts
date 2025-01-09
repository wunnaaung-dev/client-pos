import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductCategory, ProductCategoryDTO } from '../../types/productCategory';
import { RootState } from './store';
import { productCategoryService } from '../../api/productCategoryService';

interface ProductCategoryState {
    categories: ProductCategory[];
    newCategory: ProductCategoryDTO | null;
    selectedCategory: ProductCategory | null;
}

export const fetchProductCategories = createAsyncThunk(
    'categories/fetchProductCatogories',
    async () => {
        const response = await productCategoryService.getCategories()
        return response.data.data
    }
)

export const createProductCategory = createAsyncThunk(
    'categories/createProductCategory',
    async (categoryDTO: ProductCategoryDTO) => {
        const response = await productCategoryService.createCategory(categoryDTO)
        return response?.data.data
    }
)

const initialState: ProductCategoryState = {
    categories: [],
    newCategory: null,
    selectedCategory: null,
};

const productCategorySlice = createSlice({
    name: 'productCategory',
    initialState,
    reducers: {
        setSelectedCategory: (state, action: PayloadAction<ProductCategoryDTO | null>) => {
            state.newCategory = action.payload
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductCategories.fulfilled, (state, action) => {
            state.categories = action.payload as ProductCategory[]
        })
        builder.addCase(createProductCategory.fulfilled, (state, action) => {
            if (Array.isArray(action.payload)) {
                state.categories = [...state.categories, ...action.payload]
            } else if (action.payload) {
                state.categories = [...state.categories, action.payload]
            }
        })
    }
});

export const { setSelectedCategory } = productCategorySlice.actions;
export const selectProductCategories = (state: RootState): ProductCategory[] => state.productCategory.categories;
export const newProductCategory = (state: RootState): ProductCategoryDTO | null => state.productCategory.newCategory;

export default productCategorySlice.reducer;