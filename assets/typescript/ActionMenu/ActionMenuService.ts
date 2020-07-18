import ActionMenu from "./ActionMenu.js";
import ActionMenuConfiguration from "./ActionMenuConfiguration.js";

export default class ActionMenuService{
    private _actionMenus: ActionMenu[] = [];
    
    constructor(){
    
    }
    
    /**
     * Initialize all action Menus present on current page.
     */
    public initialize(actionMenuConfiguration?: ActionMenuConfiguration){
        if(actionMenuConfiguration === undefined){
            actionMenuConfiguration = new ActionMenuConfiguration();
        }

        let actionMenuContainer = document.querySelectorAll<HTMLElement>(actionMenuConfiguration.actionMenuSelector);
        for(let actionMenu of actionMenuContainer){
            this._actionMenus.push(new ActionMenu(actionMenu, actionMenuConfiguration));
        }

        console.log(this._actionMenus);
    }
}