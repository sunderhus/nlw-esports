import { Colors } from "@/styles/tokens";
import { NlwTheme } from "../theme";

export const nlwThemeDark: NlwTheme = {
    name:'dark',
    palette: {
        colors: Colors,
        primmary: {
           "50":{
            color:Colors.neutral[50],
            contrastColor:Colors.black
           },
        },
        secondary:{
            "900":{
                color:Colors.black,
                contrastColor:Colors.neutral[50],
            }
        }
    }
}