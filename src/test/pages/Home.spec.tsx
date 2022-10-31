import { render, screen } from "@testing-library/react";
import Home from "@/pages/Home";
import { ThemeSelectorProvider } from "@/contexts/theme";
import { I18nProvider } from "@/contexts/i18n";

const makeSut = () => {
    const sut = render(
        <ThemeSelectorProvider>
            <I18nProvider defaultLanguageCode="pt-BR">
                {<Home />}
            </I18nProvider>
        </ThemeSelectorProvider>
    )
    return {
        sut,
    }
}

describe('Home', () => {

    it('should render Home ', () => {
        const {sut} = makeSut();

        expect(sut).toBeDefined();
    })

    it('should present home page title message',async()=>{
         makeSut();

        const titleMessage = await screen.findByRole('heading',{level:1})

        expect(titleMessage).toHaveTextContent('Sua dupla está aqui')
    })
})