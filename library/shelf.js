"use strict";
exports.__esModule = true;
var Shelf = /** @class */ (function () {
    function Shelf() {
    }
    Shelf.prototype.add = function (newItem) {
        this.items.push(newItem);
    };
    Shelf.prototype.getFirstItem = function () {
        return this.items[0];
    };
    return Shelf;
}());
exports.Shelf = Shelf;
