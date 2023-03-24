// I can use for fetch RTK Query too

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencyApi = createApi({
  reducerPath: 'currency',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bank.gov.ua/NBUStatService/v1',
  }),
  tagTypes: ['Currency'],
  endpoints: builder => ({
    fetchCurrency: builder.query({
      query: () => `/statdirectory/exchange?json`,
      providesTags: 'Currency',
    }),
  }),
});

export const { useFetchCurrencyQuery } = currencyApi;
