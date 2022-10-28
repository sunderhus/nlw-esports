import { HelpSection } from '@/components'
import { ThemeSelectorProvider } from '@/contexts/themeProvider/ThemeSelectorProvider';
import { render, screen } from '@testing-library/react'

const makeSut = () => render(
    <ThemeSelectorProvider>
        {<HelpSection />}
    </ThemeSelectorProvider>
);

describe('HelpSection', () => {
    it('should render', () => {
        makeSut();
    })

    it('should present informative messages', () => {
        makeSut();

        const title = screen.getByRole('heading',{level:3});
        const description = screen.getByTestId('description');

        expect(title).toHaveTextContent(/Não encontrou seu duo?/i)
        expect(description).toHaveTextContent(/Publique um anúncio para encontrar novos players!/i)
    })

    it('should present the register button', () => {
        makeSut();

        const register = screen.getByRole('button');

        expect(register).toHaveTextContent(/Publicar anúncio/i)
    })
})