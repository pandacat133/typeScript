"use strict";
exports.__esModule = true;
var utilityFunctions_1 = require("./utilityFunctions");
var category_1 = require("./category");
var shelf_1 = require("./shelf");
var bookInventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true,
        category: category_1.Category.Software, catalogNumber: 1 },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true,
        category: category_1.Category.Software, catalogNumber: 1 },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true,
        category: category_1.Category.Software, catalogNumber: 1 },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true,
        category: category_1.Category.Software, catalogNumber: 1 }
];
var magInventory = [
    { issueNumber: 25, brand: 'US', catalogNumber: 1 },
    { issueNumber: 35, brand: 'Cosmo', catalogNumber: 1 },
    { issueNumber: 99, brand: 'Womens Health', catalogNumber: 1 }
];
var purgedBooks = utilityFunctions_1.Purge(bookInventory);
console.log(purgedBooks.length);
purgedBooks.forEach(function (book) { return console.log(book.title); });
var purgedNums = utilityFunctions_1.Purge([1, 2, 3, 4]);
console.log(purgedNums);
var shelf = new shelf_1.Shelf();
bookInventory.forEach(function (item) { return shelf.add(item); });
var magShelf = new shelf_1.Shelf();
console.log(magShelf.getFirstItem());
