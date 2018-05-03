abstract class CellPhone {
    private battery: string = 'none';
    screen;
    case;
    camera;

    call(phoneNumber: string): void;

    setBattery(battery): void {
        this.battery = battery;
    }
}

class SmartPhone extends CellPhone {
    browseTheWeb(url) {

    }
}

class DumbPhone extends CellPhone {

}

let smartPhone = new SmartPhone();

let dumbPhone = new DumbPhone();