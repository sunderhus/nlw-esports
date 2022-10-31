import { I18nProvider } from "@/contexts/i18n";
import { fireEvent, render, screen } from "@testing-library/react";
import { Nullable } from "vitest";

import ComponentMock from "./component-mock";

type SutParams = {
    children: React.ReactNode;
    defaultLanguageCodeMock:string;
}

const makeSut = ({
    children =  <ComponentMock changeToLanguage="pt-BR"></ComponentMock>,
    defaultLanguageCodeMock= ''
}:Partial<SutParams>) => {
    render(
        <I18nProvider defaultLanguageCode={defaultLanguageCodeMock}>
            {children}
        </I18nProvider>
    )
}

describe('I18nProvider', () => {
    it('should render children element inside the context', () => {
        makeSut({defaultLanguageCodeMock:'pt-BR'})

        const content = screen.getByText('pt-BR');

        expect(content).toBeInTheDocument();
    })

    it('should render correct language translations',()=>{
        makeSut({defaultLanguageCodeMock:'pt-BR'})

        const contentSingular = screen.getByText('dupla');
        const contentPlural = screen.getByText('duplas')
        
        expect(contentSingular).toBeInTheDocument();
        expect(contentPlural).toBeInTheDocument();
    })

    it('should change language',()=>{
        const languageCodeMock = 'en-US';
        makeSut({children:<ComponentMock changeToLanguage={languageCodeMock}/>})

        const button  = screen.getByRole('button');
        fireEvent.click(button);
        const language = screen.getByText(languageCodeMock)
        
        expect(language).toHaveTextContent(languageCodeMock);
    })
   
})