interface Vehicle {
    make: string;
    model: string;
    year: number;

    start();
    stop();
    accelerate();
    break();
    turnOnStereo();
}

var someVehicle = {
    make: 'tesla',
    model: 'roadster',
    year: 2018
};

function startVehicle(vehicle: Vehicle) {
    vehicle.start();
}

startVehicle(someVehicle);