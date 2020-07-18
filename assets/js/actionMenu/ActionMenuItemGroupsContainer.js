import ActionMenuItems from './ActionMenuItems.js';
export default class ActionMenuItemGroupsContainer {
    //#endregion
    //#region constructors
    constructor(parent, container) {
        this._container = container;
        this._parent = parent;
        this._configuration = parent.actionMenuConfiguration;
        this._heightDefault = container.offsetHeight;
        this._height = this._heightDefault;
        this.setHeight(this._heightDefault);
        this.initializeItems();
    }
    get height() {
        return this._height;
    }
    set(height) {
        this.setHeight(height);
    }
    get actionItems() {
        return this._actionItems;
    }
    get element() {
        return this._container;
    }
    get parent() {
        return this._parent;
    }
    //#endregion
    //#region private methods
    initializeItems() {
        if (this._container == null) {
            return;
        }
        let actionItems = this._container.querySelector(this._configuration.actionItemsSelector);
        if (actionItems == null) {
            throw new Error("Action Items not found");
        }
        this._actionItems = new ActionMenuItems(this, actionItems, this._configuration);
    }
    //#endregion
    //#region public methods
    setHeight(height) {
        this._container.style.height = height + "px";
    }
    getTargetMenuItems(targetId) {
        let targetElement = this._container.querySelector(`[data-action-menu="${targetId}"]`);
        if (targetElement == null) {
            return undefined;
        }
        return new ActionMenuItems(this, targetElement, this._configuration);
    }
}
//# sourceMappingURL=ActionMenuItemGroupsContainer.js.map