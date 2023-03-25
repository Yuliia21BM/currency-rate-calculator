import styled from 'styled-components';

const ErrorPageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #315842;
`;

const StyledErrorNumber = styled.h1`
  font-size: 130px;
  color: #fff;
  margin-bottom: 40px;
`;

const StyledErrorText = styled.h2`
  font-size: 30px;
  color: #fff;
`;

export const ErrorPage = () => {
  return (
    <ErrorPageWrap>
      <StyledErrorNumber>404</StyledErrorNumber>
      <StyledErrorText>
        Something went wrong. Please reload the page!
      </StyledErrorText>
    </ErrorPageWrap>
  );
};
