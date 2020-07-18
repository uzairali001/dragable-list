export default class ThemeService {
    private _activeTheme;
    get activeTheme(): Themes;
    constructor();
    /**
     * Change current theme to requested theme.
     *
     * Returns void.
     */
    changeTheme(theme: Themes): void;
}
export declare enum Themes {
    Default = "default",
    Light = "light",
    Dark = "dark",
    HighContrast = "high-contrast"
}
