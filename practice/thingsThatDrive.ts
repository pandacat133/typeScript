let car = new Car();
let truck = new Truck();

function startVehicle(vehicle: Vehicle) {
    vehicle.start();
}

startVehicle(car);
startVehicle(truck);