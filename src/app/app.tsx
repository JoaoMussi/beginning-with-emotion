import styled from '@emotion/styled';
import Button from './button/button';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Button type="button" variant="primary" href="www.google.com">Botão</Button>
    </StyledApp>
  );
}

export default App;
