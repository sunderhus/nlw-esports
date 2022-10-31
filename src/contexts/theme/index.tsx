import { createContext, useCallback, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { nlwThemeDark } from "@/styles/themes/dark";
import { nlwThemeLight } from "@/styles/themes/light";
import { NlwTheme } from "@/styles/themes/theme";
import { Props, IThemeSelectorContext } from "./interfaces";

const ThemeSelectorContext = createContext<IThemeSelectorContext>({} as ThemeSelectorContext)


const ThemeSelectorProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<NlwTheme>(nlwThemeDark)

    const selectTheme = useCallback((option: "light" | "dark") => {
        switch (option) {
            case "light":
                setTheme(nlwThemeLight)
                break;
            default:
                setTheme(nlwThemeDark)
                break;
        }
    }, [setTheme])

    return (
        <ThemeSelectorContext.Provider value={{ selectTheme }}>
            <ThemeProvider theme={theme} >
                {children}
            </ThemeProvider>
        </ThemeSelectorContext.Provider>
    )
}

const useThemeSelector = (): IThemeSelectorContext => {
    return useContext(ThemeSelectorContext);
};

export {
    ThemeSelectorProvider,
    useThemeSelector
};
