import styled from 'styled-components';

const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  /* outline: red 1px solid; */
  @media screen and (min-width: 481px) {
    width: 480px;
  }
  @media screen and (min-width: 769px) {
    width: 768px;
  }
  @media screen and (min-width: 1281px) {
    width: 1280px;
  }
`;

export const Container = ({ children }) => {
  return <MainContainer> {children}</MainContainer>;
};
