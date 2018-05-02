enum DwellingType {Rambler, TwoStory, Duplex};

class Home {
    address: string;
    rooms: number;
    baths: number;
    sqft: number;
    available: boolean;
    dwellingType: DwellingType;
}

let homes: Home[] = [
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

function getAllHomes(): Home[] {
    return homes;
}

function logFirstAvailable(): void {
    let availableHomes = homes.filter(home => home.available);

    console.log(availableHomes[0]);

    console.log(`Homes Available: ${availableHomes.length}`);
}

function getHousesByTypeOfDwelling(dwellingType: DwellingType) {
    let addresses = homes
        .filter(home => home.dwellingType == dwellingType)
        .map(home => home.address);

    return addresses;
}

let allHomes: Home[] = getAllHomes();

logFirstAvailable();

getHousesByTypeOfDwelling(DwellingType.Rambler)
    .forEach(address => console.log(address));