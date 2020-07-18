import ActionMenuConfiguration from "./ActionMenuConfiguration.js";
import ActionMenuItem from "./ActionMenuItem.js";
import ActionMenu from "./ActionMenu.js";
import ActionMenuItemGroupsContainer from "./ActionMenuItemGroupsContainer.js";


export default class ActionMenuItems {
    private readonly _activeClass: string;

    private _parent: ActionMenuItemGroupsContainer;
    get parent(): ActionMenuItemGroupsContainer {
        return this._parent;
    }

    private _isActive: boolean = false;
    get isActive(): boolean {
        return this._isActive;
    }
    set isActive(isActive: boolean) {
        this.changeActiveState(isActive);
    }

    private _height: number;
    get height(): number {
        return this._height;
    }

    private _itemsContainer: HTMLElement;
    private _config: ActionMenuConfiguration;
    private _items: ActionMenuItem[] = [];

    constructor(parent: ActionMenuItemGroupsContainer, itemsContainer: HTMLElement, config: ActionMenuConfiguration) {
        this._activeClass = config.actionItemsActiveClass;
        this._config = config;

        this._parent = parent;
        this._itemsContainer = itemsContainer;

        this._height = itemsContainer.scrollHeight;
        this._isActive = itemsContainer.classList.contains(this._activeClass);
        this.initializeItems();
    }

    public changeActiveState(isActive: boolean) {
        if (isActive) {
            this._itemsContainer.classList.add(this._activeClass)
        }
        else {
            this._itemsContainer.classList.remove(this._activeClass)
        }

        this._isActive = isActive;
    }

    private initializeItems() {
        let items = this._itemsContainer.querySelectorAll<HTMLElement>
            (this._config.actionItemSelector);

        if (items.length === 0) {
            throw new Error("Action Items not found");
        }

        for (let item of items) {
            this._items.push(new ActionMenuItem(this, item));
        }

    }
}