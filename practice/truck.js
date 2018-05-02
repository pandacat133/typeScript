var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.start = function () {
        console.log('turning key to start the truck');
    };
    Truck.prototype.stop = function () {
        console.log('stopping the truck');
    };
    Truck.prototype.accelerate = function () {
        console.log('truck is accelerating');
    };
    Truck.prototype.break = function () {
        console.log('truck is breaking');
    };
    Truck.prototype.turnOnStereo = function () {
        console.log('turning on truck stereo');
    };
    return Truck;
}());
