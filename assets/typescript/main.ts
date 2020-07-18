import ThemeService, { Themes } from './ThemeService.js';
import ActionMenuService from './ActionMenu/ActionMenuService.js';
import ActionMenuConfiguration from './ActionMenu/ActionMenuConfiguration.js';

var _themeService = new ThemeService();
_themeService.changeTheme(Themes.Dark);


let config = new ActionMenuConfiguration();
config.actionMenuSelector = ".action-menu-container";
config.actionButtonSelector = ".action-button";
config.actionItemsContainerSelector = ".action-items-container";

var _actionMenuService = new ActionMenuService();
_actionMenuService.initialize(config);

console.log("Test");
// initializeDraggableElement();

// function initializeDraggableElement() : void{
//     let actionMenuContainer = document.querySelectorAll(".action-menu-container");
//     // let actionButtons = actionMenuContainer.querySelectorAll(".action-button");
//     for(let itemContainer of actionMenuContainer){
//         let actionButton = itemContainer.querySelector(".action-button");
//         if(!actionButton){
//             continue;
//         }    
//         actionButton.addEventListener("click", () => itemContainer.classList.toggle("action-menu-open"));
//     };
// }


// let draggableElements = document.querySelector(".draggable-item [draggable=\"true\"]");
// // if(draggableElements == null){
// //     return;
// // }

// draggableElements.addEventListener("dragstart", function(this:HTMLElement){
//     this.style.position = "absolute";
// });
// draggableElements.addEventListener("drag", function(){
//     // console.log("dragging");
    
// });

// initializeActionMenu();

// function initializeActionMenu() : void{
//     let actionItemsContainer = document.querySelectorAll<HTMLElement>(".action-items-container");
//     for(let container of actionItemsContainer){
//         container.style.height = container.offsetHeight + "px";
//     }
// }

// let actionMenuItems = document.querySelectorAll("[data-action-menu-for]");

// for(let item of actionMenuItems){
//     item.addEventListener("click", function(this:HTMLElement, event) {
//         let targetId = this.dataset.actionMenuFor;
//         let target = <HTMLElement | null> document.querySelector(`[data-action-menu="${targetId}"]`);

//         let actionContainer = this.parents(".action-items-container");
//         let itemParent = this.parents(".action-items");

//         if(itemParent == null || target == null || actionContainer == null){
//             return;
//         }

//         if(itemParent.classList.contains("action-items-active")){
//             itemParent.classList.remove("action-items-active");
//             target.classList.add("action-items-active");
//         }
//         else{
//             itemParent.classList.add("action-items-active");
//             actionContainer.querySelectorAll("action-items-active")
//                 .forEach(x => x.classList.remove("action-items-active"));
//         }

        

//         actionContainer.style.height = target.offsetHeight.toString() + "px";

//         console.log({
//             "this": this,
//             "targetId": targetId,
//             "target": target,
//             "actionContainer": actionContainer,
//         });
//         // this.parentNode
//         // classList.remove("action-items-active");
//     })
// }


let button = document.getElementById("theme-button");

button?.addEventListener("click", function(this:HTMLElement){
    switch (_themeService.activeTheme) {
        case Themes.Light:
            _themeService.changeTheme(Themes.Dark);
            break;
        case Themes.Dark:
            _themeService.changeTheme(Themes.Light);
            break;
        default:
            break;
    }
});