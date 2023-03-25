import { Container } from 'components/utiles/Container';
import { StyledFooter, StyledText } from './Footer.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledText>
          Your personal currency converter is always in touch
        </StyledText>
      </Container>
    </StyledFooter>
  );
};
