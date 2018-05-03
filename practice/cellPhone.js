var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CellPhone = /** @class */ (function () {
    function CellPhone() {
        this.battery = 'none';
    }
    CellPhone.prototype.setBattery = function (battery) {
        this.battery = battery;
    };
    return CellPhone;
}());
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmartPhone.prototype.browseTheWeb = function (url) {
    };
    return SmartPhone;
}(CellPhone));
var DumbPhone = /** @class */ (function (_super) {
    __extends(DumbPhone, _super);
    function DumbPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DumbPhone;
}(CellPhone));
var smartPhone = new SmartPhone();
var dumbPhone = new DumbPhone();
