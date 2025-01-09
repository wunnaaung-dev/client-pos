import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { saleService } from "../../api/saleService"
import { RootState } from "./store"

interface SaleState {
    voucher_no: string | undefined
}

const initialState: SaleState = {
    voucher_no: undefined
}

export const generateVoucherNo = createAsyncThunk(
    'sale/generateVoucherNo',
    async() => {
        const response = await saleService.generateVoucher()
        return response
    }
)

const saleSlice = createSlice({
    name: 'sale',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(generateVoucherNo.fulfilled, (state, action) => {
            state.voucher_no = action.payload
        })
    }
})

export const selectVoucherNo = (state: RootState): string => state.sale.voucher_no as string

export default saleSlice.reducer