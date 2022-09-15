import { createContext, useCallback, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { nlwThemeDark } from "./themes/dark";
import { nlwLightTheme } from "./themes/light";
import { NlwTheme } from "./themes/theme";

interface ThemeSelectorContext {
    selectTheme(option: "light" | "dark"): void
}
const ThemeSelectorContext = createContext<ThemeSelectorContext>({} as ThemeSelectorContext)

type Props = {
    children: React.ReactNode
};

const ThemeSelectorProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<NlwTheme>(nlwLightTheme)

    const selectTheme = useCallback((option: "light" | "dark") => {
        switch (option) {
            case "light":
                setTheme(nlwLightTheme)
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

const useThemeSelector = (): ThemeSelectorContext => {
    return useContext(ThemeSelectorContext);
};

export {
    ThemeSelectorProvider,
    useThemeSelector
};