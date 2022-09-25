import Colors, { ColorOptions,ColorScales } from "@/styles/tokens/colors"

type PaletteColorScheme = {
    [key in ColorScales]: { 
        color: string;
        contrastColor: string;
    };
}

export interface NlwTheme {
    name:string;
    palette: {
        colors: ColorOptions
        primmary: Pick<PaletteColorScheme,50>,
        secondary: Pick<PaletteColorScheme,900>
    }
}
