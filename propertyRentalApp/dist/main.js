var DwellingType;
(function (DwellingType) {
    DwellingType[DwellingType["Rambler"] = 0] = "Rambler";
    DwellingType[DwellingType["TwoStory"] = 1] = "TwoStory";
    DwellingType[DwellingType["Duplex"] = 2] = "Duplex";
})(DwellingType || (DwellingType = {}));
;
class Home {
}
let homes = [
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
    let availableHomes = homes.filter(home => home.available);
    console.log(availableHomes[0]);
    console.log(`Homes Available: ${availableHomes.length}`);
}
function getHousesByTypeOfDwelling(dwellingType) {
    let addresses = homes
        .filter(home => home.dwellingType == dwellingType)
        .map(home => home.address);
    return addresses;
}
function logHouseAddresses() {
    let allAddresses = homes
        .filter(home => home.address)
        .map(home => home.address);
    return allAddresses;
}
function getHouseByID(searchId) {
    let ids = homes.filter(home => home.id == searchId).map(home => home.address);
    return ids;
}
function createRenter(name, dob, ssn, phoneNumber, emailAddress) {
    console.log(`Name: ${name}, 
                 DOB: ${dob}, 
                 SSN: ${ssn}, 
                 Phone Number: ${phoneNumber}, 
                 Email Address: ${emailAddress}`);
}
//ALL IMPLEMENTATIONS OF FUNCTIONS HERE:
//---------------------------------------------------------------------
//returns an array of all of the homes and their properties:
let allHomes = getAllHomes();
console.log(allHomes);
//returns the first available home listed:
logFirstAvailable();
//returns all addresses of all homes:
logHouseAddresses()
    .forEach(address => console.log(address));
//returns the type of home and what its address is:
getHousesByTypeOfDwelling(DwellingType.Rambler)
    .forEach(address => console.log(`${address} is a rambler home.`));
getHousesByTypeOfDwelling(DwellingType.TwoStory)
    .forEach(address => console.log(`${address} is a two story home.`));
getHousesByTypeOfDwelling(DwellingType.Duplex)
    .forEach(address => console.log(`${address} is a duplex home.`));
//lets a user enter in an ID and then returns the home by the ID number:
let myID = prompt('Please enter in an ID number to find a home');
getHouseByID(myID).forEach(address => console.log(address));
//lets a user create a renter:
let myName = prompt('What is your name?');
let myDob = prompt('What is your DOB?');
let mySsn = prompt('What is your SSN?');
let myPhoneNumber = prompt('What is your phone number?');
let myEmailAddress = prompt('What is your email address? (optional)', 'None given.');
createRenter(myName, myDob, mySsn, myPhoneNumber, myEmailAddress);
//# sourceMappingURL=main.js.map