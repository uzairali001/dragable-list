export default class ThemeService {

    private _activeTheme: Themes = Themes.Light;
    get activeTheme(): Themes {
        return this._activeTheme;
    }


    constructor(){

    }
    /**
     * Change current theme to requested theme.
     * 
     * Returns void.
     */
    public changeTheme(theme:Themes) {
        document.documentElement.classList.add('color-theme-in-transition')
        document.documentElement.setAttribute('data-theme', theme)
        window.setTimeout(function () {
            document.documentElement.classList.remove('color-theme-in-transition')
        }, 1000);
        
        this._activeTheme = theme;
    }
}


export enum Themes {
    Default = "default",
    Light = "light",
    Dark = "dark",
    HighContrast = "high-contrast",
}