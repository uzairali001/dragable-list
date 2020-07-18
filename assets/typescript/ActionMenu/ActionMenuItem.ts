import ActionMenuItems from './ActionMenuItems.js'
import ActionMenu from './ActionMenu.js'
import ActionMenuItemGroupsContainer from './ActionMenuItemGroupsContainer.js';

export default class ActionMenuItem {

    //#region properties
    get parent(): ActionMenuItems {
        return this._parent;
    }

    get hasSubItems(): boolean {
        return this._subItems != null;
    }

    private _subItems?: ActionMenuItems;
    get subItems(): ActionMenuItems | undefined {
        return this._subItems;
    }
    //#endregion

    //#region fields
    private readonly _groupsContainer: ActionMenuItemGroupsContainer;
    //#endregion

    //#region initializers
    private _item: HTMLElement;
    private _parent: ActionMenuItems;
    //#endregion

    //#region constructors
    constructor(parent: ActionMenuItems, item: HTMLElement) {
        this._parent = parent;
        this._item = item;
        this._groupsContainer = parent.parent;

        this.initializeSubItems();
        this.bindClickEvent();
    }
    //#endregion

    //#region public methods

    //#endregion

    //#region private methods
    private initializeSubItems(): void {
        let targetId = this._item.dataset.actionMenuFor;
        if (targetId == null) {
            return;
        }

        this._subItems = this._groupsContainer.getTargetMenuItems(targetId);
    }

    private bindClickEvent(): void {
        let thisObj = this;
        this._item.addEventListener('click', function (this: HTMLElement, event: Event) {
            event.preventDefault();

            thisObj.navigateToSubItem();
        });
    }

    private navigateToSubItem() {
        if (this._subItems == null) {
            return;
        }
        // this.parent.isActive = false;
        // this._subItems.isActive = true;
        // this._groupsContainer.setHeight(this._subItems.height);

        this._groupsContainer.navigateToSubItem(this._subItems);
    }
    //#endregion
}