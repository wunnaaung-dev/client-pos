import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../types/pos";
import { RootState } from "./store";
import { Buyer } from "../../types/customer";
import { SaleType } from "../../types/sale";


interface POS_State {
    orders: Order[];
    buyer: Buyer | null
    totalQty: number;
    subTotal: number;
    total: number;
    shippingCost?: number;
    saleType: SaleType
}

const initialState: POS_State = {
    orders: [],
    buyer: null,
    totalQty: 0,
    subTotal: 0,
    total: 0,
    shippingCost: 0,
    saleType: SaleType.RETAIL
}

const posSlice = createSlice({
    name: 'pos',
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<Order>) => {
            if (state.orders === null) {
                state.orders = [];
            }
            const existingOrder = state.orders.find(
                (order) => order.productCode === action.payload.productCode
            );
            if (!existingOrder) {
                state.orders.push(action.payload);

                state.totalQty += action.payload.quantity;
                state.subTotal += action.payload.subtotal;
                state.total += action.payload.subtotal;
            }
        },
        increaseQuantity: (state, action: PayloadAction<string>) => {
            const existingOrder = state.orders.find(order => order.productCode === action.payload);
            if (existingOrder) {
                existingOrder.quantity += 1;
                existingOrder.subtotal = existingOrder.price * existingOrder.quantity;

                state.totalQty += 1;
                state.subTotal += existingOrder.price;
                state.total += existingOrder.price;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<string>) => {
            const existingOrder = state.orders.find(order => order.productCode === action.payload);
            if (existingOrder && existingOrder.quantity > 1) {
                existingOrder.quantity -= 1;
                existingOrder.subtotal = existingOrder.price * existingOrder.quantity;

                state.totalQty -= 1;
                state.subTotal -= existingOrder.price;
                state.total -= existingOrder.price;
            }

        },
        removeOrder: (state, action: PayloadAction<string>) => {
            const orderToRemove = state.orders.find(order => order.productCode === action.payload);

            if (orderToRemove) {
                state.totalQty -= orderToRemove.quantity;
                state.subTotal -= orderToRemove.subtotal;
                state.total -= orderToRemove.subtotal;

                // Filter out the order to remove
                state.orders = state.orders.filter(order => order.productCode !== action.payload);
            } else {
                console.error(`Order with productCode ${action.payload} not found.`);
            }
        },
        changeSaleType: (state, action: PayloadAction<SaleType>) => {
            state.saleType = action.payload
        },
        setCustomer: (state, action: PayloadAction<Buyer>) => {
            state.buyer = action.payload;
        },
        setShippingCost: (state, action: PayloadAction<number>) => {
            state.shippingCost = action.payload;
            state.total += action.payload;
        },
        clearCart: (state) => {
            state.orders = [];
            state.buyer = null;
            state.totalQty = 0;
            state.subTotal = 0;
            state.total = 0;
            state.shippingCost = 0;
        }
    }
});


export const { addOrder, increaseQuantity, decreaseQuantity, removeOrder, setCustomer, setShippingCost, clearCart, changeSaleType } = posSlice.actions;
export const selectOrders = (state: RootState): Order[] | null => state.pos.orders;
export const selectTotalQty = (state: RootState): number => state.pos.totalQty;
export const selectSubTotal = (state: RootState): number => state.pos.subTotal;
export const selectGrandTotal = (state: RootState): number => state.pos.total;
export const selectBuyer = (state: RootState): Buyer | null => state.pos.buyer;
export const selectSaleType = (state: RootState): SaleType => state.pos.saleType
export default posSlice.reducer;