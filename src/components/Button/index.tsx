import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({children,title,...props}) => {
  return (
    <Container {...props}>
       {children} {title}
    </Container>
  );
}

export default Button;