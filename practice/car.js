var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log('pressing button to start the car');
    };
    Car.prototype.stop = function () {
        console.log('stopping the car');
    };
    Car.prototype.accelerate = function () {
        console.log('car is accelerating');
    };
    Car.prototype.break = function () {
        console.log('car is breaking');
    };
    Car.prototype.turnOnStereo = function () {
        console.log('turning on car stereo');
    };
    Car.prototype.turnOffStereo = function () {
        console.log('turning off car stereo');
    };
    return Car;
}());
