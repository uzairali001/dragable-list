export default class ActionMenuConfiguration {
    private _actionMenuSelector: string;
    get actionMenuSelector(): string {
        return this._actionMenuSelector;
    }
    set actionMenuSelector(value: string) {
        this._actionMenuSelector = value;
    }

    private _actionButtonSelector: string;
    get actionButtonSelector(): string {
        return this._actionButtonSelector;
    }
    set actionButtonSelector(value: string) {
        this._actionButtonSelector = value;
    }

    private _actionItemsContainerSelector: string;
    get actionItemsContainerSelector(): string {
        return this._actionItemsContainerSelector;
    }
    set actionItemsContainerSelector(value: string) {
        this._actionItemsContainerSelector = value;
    }

    private _actionItemsSelector: string;
    get actionItemsSelector(): string {
        return this._actionItemsSelector;
    }
    set actionItemsSelector(value: string) {
        this._actionItemsSelector = value;
    }
    private _actionItemSelector: string;
    get actionItemSelector(): string {
        return this._actionItemSelector;
    }
    set actionItemSelector(value: string) {
        this._actionItemSelector = value;
    }

    private _actionItemsActiveClass: string;
    get actionItemsActiveClass(): string {
        return this._actionItemsActiveClass;
    }
    set actionItemsActiveClass(value: string) {
        this._actionItemsActiveClass = value;
    }

    private _actionMenuOpenClass: string;
    get actionMenuOpenClass(): string {
        return this._actionMenuOpenClass;
    }
    set actionMenuOpenClass(value: string) {
        this._actionMenuOpenClass = value;
    }

    constructor() {
        this._actionMenuSelector = ".action-menu-container";
        this._actionButtonSelector = ".action-button";
        this._actionItemsContainerSelector = ".action-items-container";
        this._actionItemsSelector = ".action-items";
        this._actionItemSelector = ".action-item";
        this._actionItemsActiveClass = "action-items-active";
        this._actionMenuOpenClass = "action-menu-open";
    }
}