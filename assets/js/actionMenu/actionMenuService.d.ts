import ActionMenuConfiguration from "./ActionMenuConfiguration.js";
export default class ActionMenuService {
    private _actionMenus;
    constructor();
    /**
     * Initialize all action Menus present on current page.
     */
    initialize(actionMenuConfiguration?: ActionMenuConfiguration): void;
}
