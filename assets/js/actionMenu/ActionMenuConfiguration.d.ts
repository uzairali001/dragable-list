export default class ActionMenuConfiguration {
    private _actionMenuSelector;
    get actionMenuSelector(): string;
    set actionMenuSelector(value: string);
    private _actionButtonSelector;
    get actionButtonSelector(): string;
    set actionButtonSelector(value: string);
    private _actionItemsContainerSelector;
    get actionItemsContainerSelector(): string;
    set actionItemsContainerSelector(value: string);
    private _actionItemsSelector;
    get actionItemsSelector(): string;
    set actionItemsSelector(value: string);
    private _actionItemSelector;
    get actionItemSelector(): string;
    set actionItemSelector(value: string);
    private _actionItemsActiveClass;
    get actionItemsActiveClass(): string;
    set actionItemsActiveClass(value: string);
    private _actionMenuOpenClass;
    get actionMenuOpenClass(): string;
    set actionMenuOpenClass(value: string);
    constructor();
}
