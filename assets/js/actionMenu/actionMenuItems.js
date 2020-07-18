import ActionMenuItem from "./ActionMenuItem.js";
export default class ActionMenuItems {
    constructor(parent, itemsContainer, config) {
        this._isActive = false;
        this._items = [];
        this._activeClass = config.actionItemsActiveClass;
        this._config = config;
        this._parent = parent;
        this._itemsContainer = itemsContainer;
        this._height = itemsContainer.scrollHeight;
        this._isActive = itemsContainer.classList.contains(this._activeClass);
        this.initializeItems();
    }
    get parent() {
        return this._parent;
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(isActive) {
        this.changeActiveState(isActive);
    }
    get height() {
        return this._height;
    }
    changeActiveState(isActive) {
        if (isActive) {
            this._itemsContainer.classList.add(this._activeClass);
        }
        else {
            this._itemsContainer.classList.remove(this._activeClass);
        }
        this._isActive = isActive;
    }
    initializeItems() {
        let items = this._itemsContainer.querySelectorAll(this._config.actionItemSelector);
        if (items.length === 0) {
            throw new Error("Action Items not found");
        }
        for (let item of items) {
            this._items.push(new ActionMenuItem(this, item));
        }
    }
}
//# sourceMappingURL=ActionMenuItems.js.map