import React from 'react';
import logoImage from  '@/assets/logo-nlw-esports.svg'
import { Container } from './styles';

const Logo: React.FC = () => {
    return (
        <Container>
            <img src={logoImage} alt="NLW logo" />
        </Container>
    );
}

export default Logo;