export default class themeService {
    constructor(){

    }
    
    public changeTheme(theme:Themes) {
        document.documentElement.classList.add('color-theme-in-transition')
        document.documentElement.setAttribute('data-theme', theme)
        window.setTimeout(function () {
            document.documentElement.classList.remove('color-theme-in-transition')
        }, 1000)
    }
}

export enum Themes {
    Default = "default",
    Light = "light",
    Dark = "dark",
    HighContrast = "high-contrast",
}