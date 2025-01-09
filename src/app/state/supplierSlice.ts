import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { Supplier, SupplierType } from '../../types/supplier';
import { supplierMock } from '../../mockData/supplierMock';


interface SupplierState {
    suppliers: Supplier[];
    loading: boolean;
    error: string | null;
}

const initialState: SupplierState = {
    suppliers: supplierMock,
    loading: false,
    error: null,
};

// Async thunks for CRUD operations

export const addSupplier = createAsyncThunk(
    'suppliers/addSupplier',
    async (newSupplier: Supplier, { rejectWithValue }) => {
        try {
            if (!Object.values(SupplierType).includes(newSupplier.type)) {
                throw new Error(`Invalid SupplierType: ${newSupplier.type}`);
            }
            const response = await axios.post('/api/suppliers', newSupplier);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const updateSupplier = createAsyncThunk(
    'suppliers/updateSupplier',
    async (updatedSupplier: Supplier, { rejectWithValue }) => {
        try {
            if (!Object.values(SupplierType).includes(updatedSupplier.type)) {
                throw new Error(`Invalid SupplierType: ${updatedSupplier.type}`);
            }
            const response = await axios.put(`/api/suppliers/${updatedSupplier.id}`, updatedSupplier);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const fetchSuppliers = createAsyncThunk(
    'suppliers/fetchSuppliers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/suppliers');
            return response.data.map((supplier: Supplier) => {
                if (!Object.values(SupplierType).includes(supplier.type)) {
                    throw new Error(`Invalid SupplierType: ${supplier.type}`);
                }
                return supplier;
            });
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const deleteSupplier = createAsyncThunk(
    'suppliers/deleteSupplier',
    async (id: number, { rejectWithValue }) => {
        try {
            await axios.delete(`/api/suppliers/${id}`);
            return id;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


const supplierSlice = createSlice({
    name: 'suppliers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSuppliers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSuppliers.fulfilled, (state, action: PayloadAction<Supplier[]>) => {
                state.loading = false;
                state.suppliers = action.payload;
            })
            .addCase(fetchSuppliers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch suppliers';
            })
            .addCase(addSupplier.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addSupplier.fulfilled, (state, action: PayloadAction<Supplier>) => {
                state.loading = false;
                state.suppliers.push(action.payload);
            })
            .addCase(addSupplier.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to add supplier';
            })
            .addCase(updateSupplier.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateSupplier.fulfilled, (state, action: PayloadAction<Supplier>) => {
                state.loading = false;
                const index = state.suppliers.findIndex(supplier => supplier.id === action.payload.id);
                if (index !== -1) {
                    state.suppliers[index] = action.payload;
                }
            })
            .addCase(updateSupplier.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to update supplier';
            })
            .addCase(deleteSupplier.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteSupplier.fulfilled, (state, action: PayloadAction<number>) => {
                state.loading = false;
                state.suppliers = state.suppliers.filter(supplier => supplier.id !== action.payload);
            })
            .addCase(deleteSupplier.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to delete supplier';
            });
    },
});

export const selectSuppliers = (state: RootState) => state.suppliers.suppliers;
export const selectLoading = (state: RootState) => state.suppliers.loading;
export const selectError = (state: RootState) => state.suppliers.error;

export default supplierSlice.reducer;