import ActionMenu from './ActionMenu.js';
import ActionMenuConfiguration from './ActionMenuConfiguration.js';
import ActionMenuItems from './ActionMenuItems.js';

export default class ActionMenuItemGroupsContainer {

    //#region properties
    private _height: number;
    get height(): number {
        return this._height;
    }
    set(height: number) {
        this.setHeight(height);
    }

    private _actionItems?: ActionMenuItems;
    get actionItems(): ActionMenuItems | undefined {
        return this._actionItems;
    }

    get element(): HTMLElement {
        return this._container;
    }

    get parent(): ActionMenu {
        return this._parent;
    }
    //#endregion

    //#region fields
    private readonly _heightDefault: number;
    private readonly _configuration: ActionMenuConfiguration;
    //#endregion

    //#region initializers
    private _container: HTMLElement;
    private _parent: ActionMenu;
    //#endregion

    //#region constructors
    constructor(parent: ActionMenu, container: HTMLElement) {
        this._container = container;
        this._parent = parent;
        this._configuration = parent.actionMenuConfiguration;

        this._heightDefault = container.offsetHeight;
        this._height = this._heightDefault;

        this.setHeight(this._heightDefault);
        this.initializeItems();
    }
    //#endregion

    //#region private methods
    private initializeItems(): void {
        if (this._container == null) {
            return;
        }

        let actionItems = this._container.querySelector<HTMLElement>(this._configuration.actionItemsSelector);
        if (actionItems == null) {
            throw new Error("Action Items not found");
        }

        this._actionItems = new ActionMenuItems(this, actionItems, this._configuration);
    }
    //#endregion

    //#region public methods
    public setHeight(height: number) {
        this._container.style.height = height + "px";
    }

    public getTargetMenuItems(targetId: string): ActionMenuItems | undefined {
        let targetElement = this._container.querySelector<HTMLElement>
            (`[data-action-menu="${targetId}"]`);

        if(targetElement == null){
            return undefined;
        }

        return new ActionMenuItems(this, targetElement, this._configuration);
    }
    //#endregion
}