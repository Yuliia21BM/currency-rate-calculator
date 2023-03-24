import { Container } from 'components/utiles/Container';
import { ConvertForm } from 'components/ConvertForm/ConvertForm';
import { StyledTitle } from './Main.styled';

export const Main = () => {
  return (
    <main>
      <Container>
        <StyledTitle>Конвертер валют</StyledTitle>
        <ConvertForm />
      </Container>
    </main>
  );
};
