import { Container } from 'components/utiles/Container';
import { ConvertForm } from 'components/ConvertForm/ConvertForm';
import { StyledTitle, MainWrap } from './Main.styled';

export const Main = () => {
  return (
    <main>
      <Container>
        <MainWrap>
          <StyledTitle>Конвертер валют</StyledTitle>
          <ConvertForm />
        </MainWrap>
      </Container>
    </main>
  );
};
