"use strict";
Element.prototype.parents = function (parentSelector) {
    var parentElement = this.parentNode;
    while (true) {
        if (parentElement == null) {
            break;
        }
        if (parentElement.matches(parentSelector)) {
            return parentElement;
        }
        parentElement = parentElement.parentNode;
    }
    return null;
};
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
//# sourceMappingURL=utility.js.map