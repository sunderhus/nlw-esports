import { ThemeSelectorProvider } from "@/contexts/themeProvider/ThemeSelectorProvider";
import { fireEvent, render, screen } from "@testing-library/react";
import { ReactNode } from "react";

import { afterEach, vi } from 'vitest';
import ComponentMock from "./component-mock";

const makeSut = (children: ReactNode = <ComponentMock themeName="light"></ComponentMock>) => {
    const sut = render(
        <ThemeSelectorProvider>
            {children}
        </ThemeSelectorProvider>
    )
    return {
        sut,
        children
    }
}

describe('ThemeSelectorProvider', () => {
    afterEach(() => {
        vi.clearAllMocks();
    })

    it('should render children element inside the context', () => {
        makeSut()

        const content = screen.getByTestId("text-mock");

        expect(content).toBeInTheDocument();
    })
    it('should use dark theme as default option', () => {
        makeSut(<ComponentMock themeName="dark"/>);

        const themeSelector = screen.getByTestId('selector');
        fireEvent.click(themeSelector)
        const content = screen.getByTestId('text-mock');
        
        ()=>expect(content).toHaveTextContent('dark')

    })

    it('should use light theme', () => {
        makeSut(<ComponentMock themeName="light"/>);

        const themeSelector = screen.getByTestId('selector');
        fireEvent.click(themeSelector)
        const content = screen.getByTestId('text-mock');

        expect(content).toHaveTextContent('light')

    })
})