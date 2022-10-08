import { Slider } from '@/components'
import { render, screen } from '@testing-library/react'

const makeSut = () => render(<Slider />);

describe('Slider', () => {
    it('should present a card game image', () => {
        makeSut();

        const cardImage = screen.getByRole('img')

        expect(cardImage).toBeInTheDocument();
    })


})