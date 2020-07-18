export default class ActionMenuConfiguration {
    constructor() {
        this._actionMenuSelector = ".action-menu-container";
        this._actionButtonSelector = ".action-button";
        this._actionItemsContainerSelector = ".action-items-container";
        this._actionItemsSelector = ".action-items";
        this._actionItemSelector = ".action-item";
        this._actionItemsActiveClass = "action-items-active";
        this._actionMenuOpenClass = "action-menu-open";
    }
    get actionMenuSelector() {
        return this._actionMenuSelector;
    }
    set actionMenuSelector(value) {
        this._actionMenuSelector = value;
    }
    get actionButtonSelector() {
        return this._actionButtonSelector;
    }
    set actionButtonSelector(value) {
        this._actionButtonSelector = value;
    }
    get actionItemsContainerSelector() {
        return this._actionItemsContainerSelector;
    }
    set actionItemsContainerSelector(value) {
        this._actionItemsContainerSelector = value;
    }
    get actionItemsSelector() {
        return this._actionItemsSelector;
    }
    set actionItemsSelector(value) {
        this._actionItemsSelector = value;
    }
    get actionItemSelector() {
        return this._actionItemSelector;
    }
    set actionItemSelector(value) {
        this._actionItemSelector = value;
    }
    get actionItemsActiveClass() {
        return this._actionItemsActiveClass;
    }
    set actionItemsActiveClass(value) {
        this._actionItemsActiveClass = value;
    }
    get actionMenuOpenClass() {
        return this._actionMenuOpenClass;
    }
    set actionMenuOpenClass(value) {
        this._actionMenuOpenClass = value;
    }
}
//# sourceMappingURL=ActionMenuConfiguration.js.map