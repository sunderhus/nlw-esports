import { render } from "@testing-library/react";
import App from "@/App";


describe('App',()=>{
    
    it('should render',()=>{
        const sut = render(<App/>);

        expect(sut).toBeDefined();
    })
})