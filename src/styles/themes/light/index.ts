import { Colors } from "@/styles/tokens";
import { NlwTheme } from "../theme";

export const nlwLightTheme: NlwTheme = {
    palette: {
        colors: Colors,
        primmary: {
           "50":{
            color:Colors.stone[300],
            contrastColor:Colors.black
           },
        },
        secondary:{
            "900":{
                color:Colors.stone[900],
                contrastColor:Colors.white,
            }
        }
    }
}