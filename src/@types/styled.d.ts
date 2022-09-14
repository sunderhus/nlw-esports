import { NlwTheme } from "@/styles/themes/theme"

declare module 'styled-components' {
    export interface DefaultTheme extends NlwTheme{
    }
  }