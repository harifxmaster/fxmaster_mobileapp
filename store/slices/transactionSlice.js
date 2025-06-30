import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTransactions } from '../../services/transactionApi';

// Async thunk to fetch transactions
export const getTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchTransactions();
      return data;
      //  throw new Error('Simulated API failure!');
    } catch (error) {
      return rejectWithValue('Failed to fetch transactions');
    }
  },
);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearTransactions: state => {
      state.list = [];
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTransactions.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearTransactions } = transactionsSlice.actions;

export default transactionsSlice.reducer;
