function print(className: string) {
    return (target: Function) => {
        console.log(`Name of the class is: ${className}`);
    }
}

function readOnly(
    target: Function,
    propertyName: string,
    propertyDescriptor: PropertyDescriptor) {

    propertyDescriptor.writable = false;
}


@print('SomeClass')
class SomeClass {

    @readOnly
    someProperty(): string {
        return 'something';
    }

    constructor() {

    }
}

let myClass = new SomeClass();