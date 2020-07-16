import themeService, { Themes } from './theme.js';

var theme = new themeService();
theme.changeTheme(Themes.Dark);


initializeDraggableElement();

function initializeDraggableElement() : void{
    let actionItemsContainer = document.querySelectorAll(".action-items-container");
    // let actionButtons = actionItemsContainer.querySelectorAll(".action-button");
    for(let itemContainer of actionItemsContainer){
        let actionButton = itemContainer.querySelector(".action-button");
        if(!actionButton){
            continue;
        }    
        actionButton.addEventListener("click", () => itemContainer.classList.toggle("action-menu-open"));
    };
}


let draggableElements = document.querySelector(".draggable-item [draggable=\"true\"]");
// if(draggableElements == null){
//     return;
// }

draggableElements.addEventListener("dragstart", function(this:HTMLElement){
    this.style.position = "absolute";
});
draggableElements.addEventListener("drag", function(){
    // console.log("dragging");
    
});


let actionMenuItems = document.querySelectorAll("[data-action-menu-for]");

for(let item of actionMenuItems){
    item.addEventListener("click", function(this:HTMLElement, event) {
        let targetId = this.dataset.actionMenuFor;
        let target = <HTMLElement | null> document.querySelector(`[data-action-menu="${targetId}"]`);

        let actionContainer = this.parents(".action-items-container");
        let itemParent = this.parents(".action-items");

        if(itemParent == null || target == null || actionContainer == null){
            return;
        }

        itemParent.classList.remove("action-items-active");
        target.classList.add("action-items-active");

        actionContainer.style.maxHeight = target.offsetHeight.toString() + "px";

        console.log({
            "this": this,
            "targetId": targetId,
            "target": target,
            "actionContainer": actionContainer,
        });
        // this.parentNode
        // classList.remove("action-items-active");
    })
}


let button = document.getElementById("theme-button");
let currentTheme = Themes.Light;

button.addEventListener("click", function(this:HTMLElement){
    if(currentTheme == Themes.Light){
        theme.changeTheme(Themes.Dark);
        currentTheme = Themes.Dark;
    }
    else{
        theme.changeTheme(Themes.Light);
        currentTheme = Themes.Light;
    }

})