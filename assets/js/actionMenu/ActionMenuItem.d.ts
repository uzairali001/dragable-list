import ActionMenuItems from './ActionMenuItems.js';
export default class ActionMenuItem {
    get parent(): ActionMenuItems;
    get hasSubItems(): boolean;
    private _subItems?;
    get subItems(): ActionMenuItems | undefined;
    private readonly _groupsContainer;
    private _item;
    private _parent;
    constructor(parent: ActionMenuItems, item: HTMLElement);
    private initializeSubItems;
    private bindClickEvent;
    private navigateToSubItem;
}
