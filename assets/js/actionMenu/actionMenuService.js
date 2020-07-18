import ActionMenu from "./ActionMenu.js";
import ActionMenuConfiguration from "./ActionMenuConfiguration.js";
export default class ActionMenuService {
    constructor() {
        this._actionMenus = [];
    }
    /**
     * Initialize all action Menus present on current page.
     */
    initialize(actionMenuConfiguration) {
        if (actionMenuConfiguration === undefined) {
            actionMenuConfiguration = new ActionMenuConfiguration();
        }
        let actionMenuContainer = document.querySelectorAll(actionMenuConfiguration.actionMenuSelector);
        for (let actionMenu of actionMenuContainer) {
            this._actionMenus.push(new ActionMenu(actionMenu, actionMenuConfiguration));
        }
        console.log(this._actionMenus);
    }
}
//# sourceMappingURL=ActionMenuService.js.map