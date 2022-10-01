import { render, screen } from "@testing-library/react";
import Home from "@/pages/Home";
import { ThemeSelectorProvider } from "@/contexts/themeProvider/ThemeSelectorProvider";

const makeSut = () => {
    const sut = render(
        <ThemeSelectorProvider>
            {<Home />}
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

        const titleMessage = await screen.findByRole('heading')

        expect(titleMessage).toHaveTextContent('Seu duo está aqui')
    })
})