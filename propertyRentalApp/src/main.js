var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DwellingType;
(function (DwellingType) {
    DwellingType[DwellingType["Rambler"] = 0] = "Rambler";
    DwellingType[DwellingType["TwoStory"] = 1] = "TwoStory";
    DwellingType[DwellingType["Duplex"] = 2] = "Duplex";
})(DwellingType || (DwellingType = {}));
;
var Home = /** @class */ (function () {
    function Home() {
    }
    return Home;
}());
var homes = [
    {
        address: '123 main st',
        rooms: 5,
        baths: 2,
        sqft: 1200,
        available: true,
        dwellingType: DwellingType.Rambler,
        id: 339402
    },
    {
        address: '124 main st',
        rooms: 2,
        baths: 1,
        sqft: 1300,
        available: false,
        dwellingType: DwellingType.Rambler,
        id: 204930
    },
    {
        address: '122 main st',
        rooms: 2,
        baths: 2,
        sqft: 1100,
        available: false,
        dwellingType: DwellingType.TwoStory,
        id: 204938
    },
    {
        address: '121 main st',
        rooms: 6,
        baths: 3,
        sqft: 1400,
        available: true,
        dwellingType: DwellingType.Duplex,
        id: 206409
    }
];
//ALL FUNCTIONS HERE:
//---------------------------------------------------------------------
function getAllHomes() {
    return homes;
}
function logFirstAvailable() {
    var availableHomes = homes.filter(function (home) { return home.available; });
    console.log(availableHomes[0]);
    console.log("Homes Available: " + availableHomes.length);
}
function getHousesByTypeOfDwelling(dwellingType) {
    var addresses = homes
        .filter(function (home) { return home.dwellingType == dwellingType; })
        .map(function (home) { return home.address; });
    return addresses;
}
function logHouseAddresses() {
    var allAddresses = homes
        .filter(function (home) { return home.address; })
        .map(function (home) { return home.address; });
    return allAddresses;
}
function getHouseByID(searchId) {
    var ids = homes.filter(function (home) { return home.id == searchId; }).map(function (home) { return home.address; });
    return ids;
}
function createRenter(name, dob, ssn, phoneNumber, emailAddress) {
    console.log("Name: " + name + ", \n                 DOB: " + dob + ", \n                 SSN: " + ssn + ", \n                 Phone Number: " + phoneNumber + ", \n                 Email Address: " + emailAddress);
}
function nameOfClass() {
    console.log('MyClass');
}
//CLASSES
//---------------------------------------------------------------------
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass = __decorate([
        nameOfClass
    ], MyClass);
    return MyClass;
}());
//ALL IMPLEMENTATIONS OF FUNCTIONS HERE:
//---------------------------------------------------------------------
//returns an array of all of the homes and their properties:
var allHomes = getAllHomes();
console.log(allHomes);
//returns the first available home listed:
logFirstAvailable();
//returns all addresses of all homes:
logHouseAddresses()
    .forEach(function (address) { return console.log(address); });
//returns the type of home and what its address is:
getHousesByTypeOfDwelling(DwellingType.Rambler)
    .forEach(function (address) { return console.log(address + " is a rambler home."); });
getHousesByTypeOfDwelling(DwellingType.TwoStory)
    .forEach(function (address) { return console.log(address + " is a two story home."); });
getHousesByTypeOfDwelling(DwellingType.Duplex)
    .forEach(function (address) { return console.log(address + " is a duplex home."); });
//lets a user enter in an ID and then returns the home by the ID number:
var myID = prompt('Please enter in an ID number to find a home');
getHouseByID(myID).forEach(function (address) { return console.log(address); });
//lets a user create a renter:
var myName = prompt('What is your name?');
var myDob = prompt('What is your DOB?');
var mySsn = prompt('What is your SSN?');
var myPhoneNumber = prompt('What is your phone number?');
var myEmailAddress = prompt('What is your email address? (optional)', 'None given.');
createRenter(myName, myDob, mySsn, myPhoneNumber, myEmailAddress);
