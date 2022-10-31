import { ArrowsClockwise } from 'phosphor-react';
import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
}

const Input: React.FC<Props> = ({ name, type, title, ...props }) => {
    return (
        <Container>
            {!!title ?
                (
                    <label data-testid={`${name}-label`} htmlFor={name}>
                        {title}
                    </label>
                ) : null}
            <input {...props} name={name} type={type}  />
        </Container>
    );
}

export default Input;