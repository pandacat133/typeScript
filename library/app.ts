import {Purge} from "./utilityFunctions";
import {Book} from "./book";
import {Category} from "./category";
import {Shelf} from "./shelf";
import {Magazine} from "./magazine";

let bookInventory: Array<Book> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true,
        category: Category.Software, catalogNumber: 1 },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true,
        category: Category.Software, catalogNumber: 1 },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true,
        category: Category.Software, catalogNumber: 1 },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true,
        category: Category.Software, catalogNumber: 1}
];

let magInventory: Array<Magazine> = [
    {issueNumber: 25, brand: 'US', catalogNumber: 1},
    {issueNumber: 35, brand: 'Cosmo', catalogNumber: 1},
    {issueNumber: 99, brand: 'Womens Health', catalogNumber: 1}
];

let purgedBooks: Array<Book> = Purge<Book>(bookInventory);
console.log(purgedBooks.length);
purgedBooks.forEach(book => console.log(book.title));

let purgedNums: Array<number> = Purge<number>([1,2,3,4]);
console.log(purgedNums);

let shelf = new Shelf<Book>();
bookInventory.forEach(item => shelf.add(item));

let magShelf = new Shelf<Magazine>();
console.log(magShelf.getFirstItem());