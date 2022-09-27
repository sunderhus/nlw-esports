import { Logo } from '@/components'
import { render, screen } from '@testing-library/react'

const makeSut = () => render(<Logo />);

describe('Logo', () => {
    it('should present a logo image', () => {
        makeSut();

        const logo = screen.getByRole('img')

        expect(logo).toHaveAttribute('src', expect.stringContaining('logo-nlw-esports.svg'))

    })

    it('should present a logo accessible description to users', () => {
        makeSut();

        const logo = screen.getByRole('img')

        expect(logo).toHaveAccessibleName()
    })
})