import Colors, { ColorOptions,ColorScales } from "@/styles/tokens/colors"
type ColorScaleSchema = { 
    color: string;
    contrastColor: string;
}

type PaletteColorScheme = {
    [key in ColorScales]:ColorScaleSchema;
}

export interface NlwTheme {
    name:string;
    palette: {
        colors: ColorOptions
        primmary: Pick<PaletteColorScheme,50>,
        secondary: Pick<PaletteColorScheme,900>
        backgroundColor: ColorScaleSchema
    }
}
