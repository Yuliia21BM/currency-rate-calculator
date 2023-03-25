import styled from 'styled-components';
import {
  BsCurrencyDollar,
  BsCurrencyEuro,
  BsCurrencyPound,
} from 'react-icons/bs';

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoText = styled.div`
  padding-left: 22px;
  color: #258e54;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 2px;
  @media screen and (min-width: 480px) {
    padding-left: 25px;
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 32px;
    font-size: 20px;
  }
`;

export const LogoImage = styled.img`
  width: 100px;
  @media screen and (min-width: 480px) {
    width: 120px;
  }
  @media screen and (min-width: 768px) {
    width: 140px;
  }
  @media screen and (min-width: 1280px) {
    width: 150px;
  }
`;

export const HeaderCurrencyesWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const CurrencyWrap = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  font-size: 14px;
  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const CurrencyIconUSD = styled(BsCurrencyDollar)`
  color: #258e54;
  size: 15px;
  @media screen and (min-width: 480px) {
    size: 18px;
  }
  @media screen and (min-width: 768px) {
    size: 22px;
  }
  @media screen and (min-width: 1280px) {
    size: 25px;
  }
`;
export const CurrencyIconEUR = styled(BsCurrencyEuro)`
  color: #258e54;
  size: 15px;
  @media screen and (min-width: 480px) {
    size: 18px;
  }
  @media screen and (min-width: 768px) {
    size: 22px;
  }
  @media screen and (min-width: 1280px) {
    size: 25px;
  }
`;
export const CurrencyIconGBP = styled(BsCurrencyPound)`
  color: #258e54;
  size: 15px;
  @media screen and (min-width: 480px) {
    size: 18px;
  }
  @media screen and (min-width: 768px) {
    size: 22px;
  }
  @media screen and (min-width: 1280px) {
    size: 25px;
  }
`;
