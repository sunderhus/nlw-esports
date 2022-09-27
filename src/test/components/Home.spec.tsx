import { render } from "@testing-library/react";
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
        const sut = makeSut();

        expect(sut).toBeDefined();
    })
})