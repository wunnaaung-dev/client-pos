import { configureStore } from '@reduxjs/toolkit'
import productRudecer from './productSlice'
import customerReducer from './customerSlice'
import productCategoryReducer from './productCategorySlice'
import supplierReducer from './supplierSlice'
import posReducer from './posSlice'
import saleReducer from './saleSlice'

export const store = configureStore({
  reducer: {
    products: productRudecer,
    customers: customerReducer,
    productCategory: productCategoryReducer,
    suppliers: supplierReducer,
    pos: posReducer,
    sale: saleReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch