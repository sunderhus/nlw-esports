import { Slider } from '@/components'
import { ThemeSelectorProvider } from '@/contexts/theme'
import { render, screen } from '@testing-library/react'

const makeSut = () => {
    const sut = render(
        <ThemeSelectorProvider>
            {<Slider />}
        </ThemeSelectorProvider>
    )
    return {
        sut,
    }
}
describe('Slider', () => {

    it('should present a maximum of six cards per slide', () => {
        makeSut();

        const cardImage = screen.getAllByRole('img')

        expect(cardImage).toHaveLength(6);
    })

})