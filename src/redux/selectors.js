export const selectAllCurrency = state => state.currency.items;

export const selectUSD = state =>
  state.currency.items.filter(item => item.cc === 'USD');

export const selectEUR = state =>
  state.currency.items.filter(item => item.cc === 'EUR');

export const selectGBP = state =>
  state.currency.items.filter(item => item.cc === 'GBP');

export const selectPLN = state =>
  state.currency.items.filter(item => item.cc === 'PLN');

export const selectIsLoading = state => state.currency.isLoading;

export const selectError = state => state.currency.error;
