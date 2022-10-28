import React from 'react';
import backgroundImageLOL from  '@/assets/image1.png';
import backgroundImageCSGO from  '@/assets/image3.png';
import { Container, CardGallery, Card } from './styles';

const Slider: React.FC = () => {
    return (
        <Container>
            <CardGallery>
                <Card href='#'>
                    <img 
                        className='card__image'
                        src={backgroundImageCSGO} 
                        alt="game 1"
                    />
                    <div className="card__info">
                        <strong>Counter Strike</strong>
                        <span>10 anúncios</span>
                    </div>
                </Card>
                <Card href='#'>
                    <img 
                        className='card__image'
                        src={backgroundImageLOL} 
                        alt="game 1"
                    />
                    <div className="card__info">
                        <strong>League of Legends</strong>
                        <span>3 anúncios</span>
                    </div>
                </Card>
                <Card href='#'>
                    <img 
                        className='card__image'
                        src={backgroundImageLOL} 
                        alt="game 1"
                    />
                    <div className="card__info">
                        <strong>League of Legends</strong>
                        <span>3 anúncios</span>
                    </div>
                </Card>
                <Card href='#'>
                    <img 
                        className='card__image'
                        src={backgroundImageLOL} 
                        alt="game 1"
                    />
                    <div className="card__info">
                        <strong>League of Legends</strong>
                        <span>3 anúncios</span>
                    </div>
                </Card>
                <Card href='#'>
                    <img 
                        className='card__image'
                        src={backgroundImageLOL} 
                        alt="game 1"
                    />
                    <div className="card__info">
                        <strong>League of Legends</strong>
                        <span>3 anúncios</span>
                    </div>
                </Card>
                <Card href='#'>
                    <img 
                        className='card__image'
                        src={backgroundImageLOL} 
                        alt="game 1"
                    />
                    <div className="card__info">
                        <strong>League of Legends</strong>
                        <span>3 anúncios</span>
                    </div>
                </Card>
                
            </CardGallery>
        </Container>
    );
}

export default Slider;