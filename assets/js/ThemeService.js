export default class ThemeService {
    constructor() {
        this._activeTheme = Themes.Light;
    }
    get activeTheme() {
        return this._activeTheme;
    }
    /**
     * Change current theme to requested theme.
     *
     * Returns void.
     */
    changeTheme(theme) {
        document.documentElement.classList.add('color-theme-in-transition');
        document.documentElement.setAttribute('data-theme', theme);
        window.setTimeout(function () {
            document.documentElement.classList.remove('color-theme-in-transition');
        }, 1000);
        this._activeTheme = theme;
    }
}
export var Themes;
(function (Themes) {
    Themes["Default"] = "default";
    Themes["Light"] = "light";
    Themes["Dark"] = "dark";
    Themes["HighContrast"] = "high-contrast";
})(Themes || (Themes = {}));
//# sourceMappingURL=ThemeService.js.map