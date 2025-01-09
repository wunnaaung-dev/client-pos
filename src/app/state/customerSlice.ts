import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { customerMockData } from '../../mockData/customerMock';
import { Customer } from '../../types/customer';


interface CustomerState {
    customers: Customer[];
}

const initialState: CustomerState = {
    customers: customerMockData,
};

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.customers.push(action.payload);
        },
        updateCustomer: (state, action: PayloadAction<Customer>) => {
            const index = state.customers.findIndex((customer) => customer.name === action.payload.name);
            state.customers[index] = action.payload;
        },
        deleteCustomer: (state, action: PayloadAction<string>) => {
            state.customers = state.customers.filter((customer) => customer.name !== action.payload);
        },
        setCustomers: (state, action: PayloadAction<Customer[]>) => {
            state.customers = action.payload;
        },
    },
});

export const { addCustomer, updateCustomer, deleteCustomer, setCustomers } = customerSlice.actions;
export const selectCustomers = (state: RootState) : Customer[] | null => state.customers.customers

export default customerSlice.reducer;