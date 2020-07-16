interface Element {    
    parents(parentSelector:string): HTMLElement | null;    
}

Element.prototype.parents = function(parentSelector:string): HTMLElement | null {
    var parentElement = <HTMLElement>this.parentNode;

    while (true) {
        if (parentElement == null){
            break;
        }
        if(parentElement.matches(parentSelector)){
            return parentElement;
        }
        parentElement = <HTMLElement>parentElement.parentNode;
    }

    return null;
}

// Polyfill
// if (!Element.prototype.matches) {
//     Element.prototype.matches = 
//         Element.prototype.matchesSelector || 
//         Element.prototype.mozMatchesSelector ||
//         Element.prototype.msMatchesSelector || 
//         Element.prototype.oMatchesSelector || 
//         Element.prototype.webkitMatchesSelector ||
//         function(s) {
//           var matches = (this.document || this.ownerDocument).querySelectorAll(s),
//               i = matches.length;
//           while (--i >= 0 && matches.item(i) !== this) {}
//           return i > -1;            
//         };
//   }

  