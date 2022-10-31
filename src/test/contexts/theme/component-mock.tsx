import { useThemeSelector } from "@/contexts/theme";
import { FC } from "react";
import { useTheme } from "styled-components"
import { ContainerMock } from "./styles"

type Props = {themeName:'light'|'dark'}

const ComponentMock:FC<Props> = ({themeName})=>{
    const {name: themeIdentifier} = useTheme();
    const {selectTheme} = useThemeSelector()
    return(
        <>
            <ContainerMock data-testid="container-mock"/>
            <p data-testid="text-mock">
               {themeIdentifier}
            </p>
            <button 
                data-testid="selector"
                onClick={()=>selectTheme(themeName)}
            ></button>
        </>
    )
}

export default ComponentMock