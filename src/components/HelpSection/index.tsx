import { MagnifyingGlassPlus } from 'phosphor-react';
import React from 'react';
import Button from '../Button';

import { Container,TextWrapper } from './styles';

const HelpSection: React.FC = () => {
    return (
        <Container>
           <TextWrapper>
            <h3>
                Não encontrou seu duo?
            </h3>
            <p data-testid="description">
                Publique um anúncio para encontrar novos players!
            </p>
           </TextWrapper>

            <Button title='Publicar anúncio' >
                <MagnifyingGlassPlus size={24} />
            </Button>
        </Container>
    );
}

export default HelpSection;