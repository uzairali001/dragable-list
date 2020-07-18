import ActionMenuConfiguration from "./ActionMenuConfiguration.js";
import ActionMenuItems from "./ActionMenuItems.js";
import ActionMenuItemGroupsContainer from "./ActionMenuItemGroupsContainer.js";



export default class ActionMenu {
    // #region properties
    private _actionMenuConfiguration: ActionMenuConfiguration;
    get actionMenuConfiguration(): ActionMenuConfiguration {
        return this._actionMenuConfiguration;
    }

    private _actionMenuContainer: HTMLElement;
    get actionMenuContainer(): HTMLElement {
        return this._actionMenuContainer;
    }

    private _actionItemGroupContainer?: ActionMenuItemGroupsContainer;
    get actionItemGroupContainer(): ActionMenuItemGroupsContainer | undefined {
        return this._actionItemGroupContainer;
    }

    private _isActive: boolean = false;
    get isActive(): boolean {
        return this._isActive;
    }
    set(isActive: boolean) {
        this.changeActiveState(isActive);
    }
    // #endregion

    // #region fields
    private readonly _actionMenuOpenClass: string;
    // #endregion

    // #region initializers
    private _actionMenuButtons: HTMLElement[] = [];
    private _actionItems?: ActionMenuItems;
    // #endregion

    // #region constructors 
    constructor(actionMenuContainer: HTMLElement, actionMenuConfiguration: ActionMenuConfiguration) {
        this._actionMenuContainer = actionMenuContainer;
        this._actionMenuConfiguration = actionMenuConfiguration;
        this._actionMenuOpenClass = actionMenuConfiguration.actionMenuOpenClass;

        this.initialize();
    }
    // #endregion

    //#region public methods
    public changeActiveState(isActive: boolean) {
        if (isActive) {
            this._actionItemGroupContainer?.element.classList.add(this._actionMenuOpenClass);
        }
        else {
            this._actionItemGroupContainer?.element.classList.remove(this._actionMenuOpenClass)
        }

        this._isActive = isActive;
    }
    //#endregion

    // #region private methods
    private initialize(): void {
        this.initializeMenuContainer();
        this.initializeButtons();
        this.initializeItemGroupsContainer();
        // this.initializeItems();

        this.initializeButtonClickEvent();

        this._isActive = this._actionItemGroupContainer?.element.classList.contains(this._actionMenuOpenClass) ?? false;
    }

    private initializeMenuContainer() {
    }

    private initializeItemGroupsContainer(): void {
        let itemsContainer = this._actionMenuContainer.querySelector<HTMLElement>
            (this._actionMenuConfiguration.actionItemsContainerSelector);

        if (itemsContainer === null) {
            throw new Error(`Action Items container not found`);
        }

        this._actionItemGroupContainer = new ActionMenuItemGroupsContainer(this, itemsContainer);
    }

    private initializeButtons(): void {
        let buttons = this._actionMenuContainer.querySelectorAll<HTMLElement>
            (this._actionMenuConfiguration.actionButtonSelector);

        if (buttons.length === 0) {
            throw new Error("Action Button not found");
        }

        for (let button of buttons) {
            this._actionMenuButtons.push(button);
        }
    }

    // private initializeItems(): void {
    //     if (this._actionItemsContainer == null) {
    //         return;
    //     }

    //     let actionItems = this._actionItemsContainer.querySelector<HTMLElement>(this._actionMenuConfiguration.actionItemsSelector);
    //     if (actionItems == null) {
    //         throw new Error("Action Items not found");
    //     }
    //     this._actionItems = new ActionMenuItems(this, actionItems);
    // }

    private initializeButtonClickEvent(): void {
        let thisObj = this;
        for (let button of this._actionMenuButtons) {
            button.addEventListener("click", function (this: HTMLElement, event: Event) {
                event.preventDefault();
                
                thisObj.changeActiveState(!thisObj._isActive);
            });
        }
    }
    // #endregion

}
