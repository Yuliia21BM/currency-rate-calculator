import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCurrency = createAsyncThunk(
  'currency/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
