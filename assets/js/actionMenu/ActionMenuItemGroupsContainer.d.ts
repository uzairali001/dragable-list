import ActionMenu from './ActionMenu.js';
import ActionMenuItems from './ActionMenuItems.js';
export default class ActionMenuItemGroupsContainer {
    private _height;
    get height(): number;
    set(height: number): void;
    private _actionItems?;
    get actionItems(): ActionMenuItems | undefined;
    get element(): HTMLElement;
    get parent(): ActionMenu;
    private readonly _heightDefault;
    private readonly _configuration;
    private _container;
    private _parent;
    constructor(parent: ActionMenu, container: HTMLElement);
    private initializeItems;
    setHeight(height: number): void;
    getTargetMenuItems(targetId: string): ActionMenuItems | undefined;
}
