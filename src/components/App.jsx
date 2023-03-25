import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchCurrency } from 'redux/currencyOperations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { ErrorPage } from './ErrorPage/ErrorPaje';
import { Spinner } from './utiles/spinner';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);
  if (isError) {
    return <ErrorPage />;
  }
  return isLoading ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#315842',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner color="#fff" />
    </div>
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
