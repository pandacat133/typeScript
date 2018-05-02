class Car implements Vehicle{
    make: string;
    model: string;
    year: number;

    start() {
        console.log('pressing button to start the car');
    }

    stop() {
        console.log('stopping the car');
    }

    accelerate() {
        console.log('car is accelerating');
    }

    break() {
        console.log('car is breaking');
    }

    turnOnStereo() {
        console.log('turning on car stereo');
    }

    turnOffStereo() {
        console.log('turning off car stereo');
    }
}