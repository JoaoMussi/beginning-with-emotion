import { ReactNode } from 'react';
import * as S from './styles';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant: 'primary' | 'secondary';
  href?: string;
}

export function Button({
  children,
  type = 'button',
  variant = 'primary',
  href,
}: ButtonProps) {
  if (href) {
    return (
      <S.linkStyled href={href} variant={variant}>
        {children}
      </S.linkStyled>
    );
  }
  return (
    <S.buttonStyled type={type} variant={variant}>
      {children}
    </S.buttonStyled>
  );
}

export default Button;
