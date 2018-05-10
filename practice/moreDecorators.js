var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function print(className) {
    return function (target) {
        console.log("Name of the class is: " + className);
    };
}
function readOnly(target, propertyName, propertyDescriptor) {
    propertyDescriptor.writable = false;
}
var SomeClass = /** @class */ (function () {
    function SomeClass() {
    }
    SomeClass.prototype.someProperty = function () {
        return 'something';
    };
    __decorate([
        readOnly
    ], SomeClass.prototype, "someProperty", null);
    SomeClass = __decorate([
        print('SomeClass')
    ], SomeClass);
    return SomeClass;
}());
var myClass = new SomeClass();
