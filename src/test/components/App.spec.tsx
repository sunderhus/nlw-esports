import { render } from "@testing-library/react";
import App from "@/App";


describe('',()=>{
    
    it('should render',()=>{
        const sut = render(<App/>);


        expect(sut).toBeDefined();
    })
})