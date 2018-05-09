function uielement(target: Function) {
    console.log('creating new uielement');
}

@uielement
class UISelect {
    constructor() {

    }
}

let uiSelect = new UISelect();