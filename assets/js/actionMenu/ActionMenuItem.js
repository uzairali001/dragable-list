export default class ActionMenuItem {
    //#endregion
    //#region constructors
    constructor(parent, item) {
        this._parent = parent;
        this._item = item;
        this._groupsContainer = parent.parent;
        this.initializeSubItems();
        this.bindClickEvent();
    }
    //#region properties
    get parent() {
        return this._parent;
    }
    get hasSubItems() {
        return this._subItems != null;
    }
    get subItems() {
        return this._subItems;
    }
    //#endregion
    //#region public methods
    //#endregion
    //#region private methods
    initializeSubItems() {
        let targetId = this._item.dataset.actionMenuFor;
        if (targetId == null) {
            return;
        }
        this._subItems = this._groupsContainer.getTargetMenuItems(targetId);
    }
    bindClickEvent() {
        let thisObj = this;
        this._item.addEventListener('click', function (event) {
            event.preventDefault();
            thisObj.navigateToSubItem();
        });
    }
    navigateToSubItem() {
        if (this._subItems == null) {
            return;
        }
        // this.parent.isActive = false;
        // this._subItems.isActive = true;
        // this._groupsContainer.setHeight(this._subItems.height);
        this._groupsContainer.navigateToSubItem(this._subItems);
    }
}
//# sourceMappingURL=ActionMenuItem.js.map