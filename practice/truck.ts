class Truck implements Vehicle{
    make: string;
    model: string;
    year: number;

    start() {
        console.log('turning key to start the truck');
    }

    stop() {
        console.log('stopping the truck');
    }

    accelerate() {
        console.log('truck is accelerating');
    }

    break() {
        console.log('truck is breaking');
    }

    turnOnStereo() {
        console.log('turning on truck stereo');
    }
}