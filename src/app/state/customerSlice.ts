import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Customer {
    id: string;
    name: string;
    email: string;
}

interface CustomerState {
    customers: Customer[];
}

const initialState: CustomerState = {
    customers: [],
};

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.customers.push(action.payload);
        },
        updateCustomer: (state, action: PayloadAction<Customer>) => {
            const index = state.customers.findIndex(customer => customer.id === action.payload.id);
            if (index !== -1) {
                state.customers[index] = action.payload;
            }
        },
        deleteCustomer: (state, action: PayloadAction<string>) => {
            state.customers = state.customers.filter(customer => customer.id !== action.payload);
        },
        setCustomers: (state, action: PayloadAction<Customer[]>) => {
            state.customers = action.payload;
        },
    },
});

export const { addCustomer, updateCustomer, deleteCustomer, setCustomers } = customerSlice.actions;

export default customerSlice.reducer;