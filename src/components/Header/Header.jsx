import { useSelector } from 'react-redux';
import { selectUSD, selectEUR, selectGBP } from 'redux/selectors';
import { Container } from 'components/utiles/Container';
import {
  HeaderWrap,
  HeaderCurrencyesWrap,
  CurrencyWrap,
  LogoText,
  LogoImage,
  CurrencyIconUSD,
  CurrencyIconEUR,
  CurrencyIconGBP,
} from './Header.styled';
import logoNBU from '../../image/logo-NBU.png';

export const Header = () => {
  const USD = useSelector(selectUSD);
  const EUR = useSelector(selectEUR);
  const GBP = useSelector(selectGBP);
  return (
    <header>
      <Container>
        <HeaderWrap>
          <div>
            <LogoText>From</LogoText>
            <LogoImage src={logoNBU} alt="logo" />
          </div>
          <HeaderCurrencyesWrap>
            <CurrencyWrap>
              <CurrencyIconUSD />
              <p>{USD[0].rate}</p>
            </CurrencyWrap>
            <CurrencyWrap>
              <CurrencyIconEUR />
              <p>{EUR[0].rate}</p>
            </CurrencyWrap>
            <CurrencyWrap>
              <CurrencyIconGBP />
              <p>{GBP[0].rate}</p>
            </CurrencyWrap>
          </HeaderCurrencyesWrap>
        </HeaderWrap>
      </Container>
    </header>
  );
};
