import { configureStore } from '@reduxjs/toolkit'
import productRudecer from './productSlice'
import customerReducer from './customerSlice'

export const store = configureStore({
  reducer: {
    products: productRudecer,
    customer: customerReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch