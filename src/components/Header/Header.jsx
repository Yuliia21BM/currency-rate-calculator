import { useSelector } from 'react-redux';
import { selectUSD, selectEUR, selectGBP } from 'redux/selectors';
import {
  BsCurrencyDollar,
  BsCurrencyEuro,
  BsCurrencyPound,
} from 'react-icons/bs';
import { Container } from 'components/utiles/Container';
import {
  StyledHeader,
  HeaderWrap,
  HeaderCurrencyesWrap,
  CurrencyWrap,
  LogoText,
} from './Header.styled';
import logoNBU from '../../image/logo-NBU.png';

export const Header = () => {
  const USD = useSelector(selectUSD);
  const EUR = useSelector(selectEUR);
  const GBP = useSelector(selectGBP);
  return (
    <StyledHeader>
      <Container>
        <HeaderWrap>
          <div>
            <LogoText>From</LogoText>
            <img src={logoNBU} alt="logo" width="150" />
          </div>
          <HeaderCurrencyesWrap>
            <CurrencyWrap>
              <BsCurrencyDollar color="#258e54" size="25px" />
              <p>{USD[0].rate}</p>
            </CurrencyWrap>
            <CurrencyWrap>
              <BsCurrencyEuro color="#258e54" size="25px" />
              <p>{EUR[0].rate}</p>
            </CurrencyWrap>
            <CurrencyWrap>
              <BsCurrencyPound color="#258e54" size="25px" />
              <p>{GBP[0].rate}</p>
            </CurrencyWrap>
          </HeaderCurrencyesWrap>
        </HeaderWrap>
      </Container>
    </StyledHeader>
  );
};
