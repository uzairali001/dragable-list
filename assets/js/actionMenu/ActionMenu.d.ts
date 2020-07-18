import ActionMenuConfiguration from "./ActionMenuConfiguration.js";
import ActionMenuItemGroupsContainer from "./ActionMenuItemGroupsContainer.js";
export default class ActionMenu {
    private _actionMenuConfiguration;
    get actionMenuConfiguration(): ActionMenuConfiguration;
    private _actionMenuContainer;
    get actionMenuContainer(): HTMLElement;
    private _actionItemGroupContainer?;
    get actionItemGroupContainer(): ActionMenuItemGroupsContainer | undefined;
    private _isActive;
    get isActive(): boolean;
    set(isActive: boolean): void;
    private readonly _actionMenuOpenClass;
    private _actionMenuButtons;
    private _actionItems?;
    constructor(actionMenuContainer: HTMLElement, actionMenuConfiguration: ActionMenuConfiguration);
    changeActiveState(isActive: boolean): void;
    private initialize;
    private initializeMenuContainer;
    private initializeItemGroupsContainer;
    private initializeButtons;
    private initializeButtonClickEvent;
}
