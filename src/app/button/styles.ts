import styled from '@emotion/styled';

interface ButtonStyledProps {
  variant: 'primary' | 'secondary';
}

const variantStyles = {
    primary: {
        background: 'blue',
        color: 'white'
    },
    secondary: {
        background: 'grey',
        color: 'black'
    }
}

export const buttonStyled = styled.button<ButtonStyledProps>`
  padding: 10px;
  ${(props) => (variantStyles[props.variant])}
`;

export const linkStyled = buttonStyled.withComponent('a');
