import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './currencyOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const currencyInitialState = {
  items: [],
  isLoading: true,
  error: null,
};

const currencuSlice = createSlice({
  name: 'currency',
  initialState: currencyInitialState,
  extraReducers: builder => {
    builder.addCase(fetchCurrency.pending, handlePending);
    builder.addCase(fetchCurrency.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(fetchCurrency.rejected, handleRejected);
  },
});

export const currencyReducer = currencuSlice.reducer;
