function uielement(target: Function) {
    console.log('creating new uielement');
}

function deprecated(t: any, p: string, d: PropertyDescriptor) {
    console.log('This method will go away soon');
}

function service(type: string) {
    return (target: Function) => {
        if (type === 'FrontEnd') {
            console.log('front end service created');
        } else if(type === 'BackEnd') {
            console.log('back end service created');
        }
    }
}

@service('FrontEnd')
class LoggingService {

    @temporal
    history: Events[];

    constructor() {

    }

    log(type: LogType, @notNull message: string) {

    }

    get history() {

    }

    @temporal
    set history() {

    }
}

@uielement
class UISelect {
    constructor() {
        console.log('ran constructor');
    }

    @deprecated
    someOldMethod() {
        console.log('ran some old method');
    }
}

let log = new LoggingService();
log.history = [];

let uiSelect = new UISelect();

uiSelect.someOldMethod();