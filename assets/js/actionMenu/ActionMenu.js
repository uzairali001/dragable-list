import ActionMenuItemGroupsContainer from "./ActionMenuItemGroupsContainer.js";
export default class ActionMenu {
    // #endregion
    // #region constructors 
    constructor(actionMenuContainer, actionMenuConfiguration) {
        this._isActive = false;
        // #endregion
        // #region initializers
        this._actionMenuButtons = [];
        this._actionMenuContainer = actionMenuContainer;
        this._actionMenuConfiguration = actionMenuConfiguration;
        this._actionMenuOpenClass = actionMenuConfiguration.actionMenuOpenClass;
        this.initialize();
    }
    get actionMenuConfiguration() {
        return this._actionMenuConfiguration;
    }
    get actionMenuContainer() {
        return this._actionMenuContainer;
    }
    get actionItemGroupContainer() {
        return this._actionItemGroupContainer;
    }
    get isActive() {
        return this._isActive;
    }
    set(isActive) {
        this.changeActiveState(isActive);
    }
    // #endregion
    //#region public methods
    changeActiveState(isActive) {
        var _a, _b;
        if (isActive) {
            (_a = this._actionItemGroupContainer) === null || _a === void 0 ? void 0 : _a.element.classList.add(this._actionMenuOpenClass);
        }
        else {
            (_b = this._actionItemGroupContainer) === null || _b === void 0 ? void 0 : _b.element.classList.remove(this._actionMenuOpenClass);
        }
        this._isActive = isActive;
    }
    //#endregion
    // #region private methods
    initialize() {
        var _a, _b;
        this.initializeMenuContainer();
        this.initializeButtons();
        this.initializeItemGroupsContainer();
        // this.initializeItems();
        this.initializeButtonClickEvent();
        this._isActive = (_b = (_a = this._actionItemGroupContainer) === null || _a === void 0 ? void 0 : _a.element.classList.contains(this._actionMenuOpenClass)) !== null && _b !== void 0 ? _b : false;
    }
    initializeMenuContainer() {
    }
    initializeItemGroupsContainer() {
        let itemsContainer = this._actionMenuContainer.querySelector(this._actionMenuConfiguration.actionItemsContainerSelector);
        if (itemsContainer === null) {
            throw new Error(`Action Items container not found`);
        }
        this._actionItemGroupContainer = new ActionMenuItemGroupsContainer(this, itemsContainer);
    }
    initializeButtons() {
        let buttons = this._actionMenuContainer.querySelectorAll(this._actionMenuConfiguration.actionButtonSelector);
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
    initializeButtonClickEvent() {
        let thisObj = this;
        for (let button of this._actionMenuButtons) {
            button.addEventListener("click", function (event) {
                event.preventDefault();
                thisObj.changeActiveState(!thisObj._isActive);
            });
        }
    }
}
//# sourceMappingURL=ActionMenu.js.map