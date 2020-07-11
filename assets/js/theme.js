export default class themeService {
    constructor() {
    }
    changeTheme(theme) {
        document.documentElement.classList.add('color-theme-in-transition');
        document.documentElement.setAttribute('data-theme', theme);
        window.setTimeout(function () {
            document.documentElement.classList.remove('color-theme-in-transition');
        }, 1000);
    }
}
