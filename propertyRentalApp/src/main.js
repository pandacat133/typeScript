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
        dwellingType: DwellingType.Rambler
    },
    {
        address: '122 main st',
        rooms: 2,
        baths: 2,
        sqft: 1100,
        available: false,
        dwellingType: DwellingType.TwoStory
    },
    {
        address: '121 main st',
        rooms: 6,
        baths: 3,
        sqft: 1400,
        available: true,
        dwellingType: DwellingType.Duplex
    },
];
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
var allHomes = getAllHomes();
logFirstAvailable();
getHousesByTypeOfDwelling(DwellingType.Rambler)
    .forEach(function (address) { return console.log(address); });
