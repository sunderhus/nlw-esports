import { Input } from '@/components'
import { ThemeSelectorProvider } from '@/contexts/themeProvider/ThemeSelectorProvider';
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest';

type SutParams = {
    name?:string;
    title?:string
}

const makeSut = ({name = 'name',...props}:SutParams) => render(
    <ThemeSelectorProvider>
        {<Input {...props}  name={name} />}
    </ThemeSelectorProvider>
);

describe('Input', () => {
    beforeEach(()=>{
        vi.clearAllMocks();
    })

    it('should render', () => {
        makeSut({});
    })

    it('should present title when is provided', () => {
        const titleMock = 'title message';
        makeSut({title:titleMock});

        const inputLabel = screen.getByTestId('name-label')

        expect(inputLabel).toHaveTextContent(titleMock);
    })

    it('should not present input label title', async() => {
        makeSut({name:'email'});

        const inputLabel = screen.queryByTestId('email-label')

        expect(inputLabel).not.toBeInTheDocument();
    })
   
})