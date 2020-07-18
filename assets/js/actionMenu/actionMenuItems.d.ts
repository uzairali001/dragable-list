import ActionMenuConfiguration from "./ActionMenuConfiguration.js";
import ActionMenuItemGroupsContainer from "./ActionMenuItemGroupsContainer.js";
export default class ActionMenuItems {
    private readonly _activeClass;
    private _parent;
    get parent(): ActionMenuItemGroupsContainer;
    private _isActive;
    get isActive(): boolean;
    set isActive(isActive: boolean);
    private _height;
    get height(): number;
    private _itemsContainer;
    private _config;
    private _items;
    constructor(parent: ActionMenuItemGroupsContainer, itemsContainer: HTMLElement, config: ActionMenuConfiguration);
    changeActiveState(isActive: boolean): void;
    private initializeItems;
}
