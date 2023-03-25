export const selectAllCurrency = state => state.currency.items;

export const selectUSD = state =>
  state.currency.items.filter(item => item.cc === 'USD');

export const selectEUR = state =>
  state.currency.items.filter(item => item.cc === 'EUR');

export const selectGBP = state =>
  state.currency.items.filter(item => item.cc === 'GBP');

export const selectPLN = state =>
  state.currency.items.filter(item => item.cc === 'PLN');

export const selectAUD = state =>
  state.currency.items.filter(item => item.cc === 'AUD');

export const selectCAD = state =>
  state.currency.items.filter(item => item.cc === 'CAD');

export const selectJPY = state =>
  state.currency.items.filter(item => item.cc === 'JPY');

export const selectCNY = state =>
  state.currency.items.filter(item => item.cc === 'CNY');

export const selectMXN = state =>
  state.currency.items.filter(item => item.cc === 'MXN');

export const selectCHF = state =>
  state.currency.items.filter(item => item.cc === 'CHF');

export const selectSEK = state =>
  state.currency.items.filter(item => item.cc === 'SEK');

export const selectIsLoading = state => state.currency.isLoading;

export const selectError = state => state.currency.error;
