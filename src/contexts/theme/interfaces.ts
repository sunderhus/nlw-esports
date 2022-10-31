export interface IThemeSelectorContext {
    selectTheme(option: "light" | "dark"): void
}

export type Props = {
    children: React.ReactNode
};