var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function uielement(target) {
    console.log('creating new uielement');
}
function deprecated(t, p, d) {
    console.log('This method will go away soon');
}
function service(type) {
    return function (target) {
        if (type === 'FrontEnd') {
            console.log('front end service created');
        }
        else if (type === 'BackEnd') {
            console.log('back end service created');
        }
    };
}
var LoggingService = /** @class */ (function () {
    function LoggingService() {
    }
    LoggingService.prototype.log = function (type, message) {
    };
    Object.defineProperty(LoggingService.prototype, "history", {
        get: function () {
        },
        set: function () {
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        temporal
    ], LoggingService.prototype, "history", void 0);
    __decorate([
        __param(1, notNull)
    ], LoggingService.prototype, "log", null);
    __decorate([
        temporal
    ], LoggingService.prototype, "history", null);
    LoggingService = __decorate([
        service('FrontEnd')
    ], LoggingService);
    return LoggingService;
}());
var UISelect = /** @class */ (function () {
    function UISelect() {
        console.log('ran constructor');
    }
    UISelect.prototype.someOldMethod = function () {
        console.log('ran some old method');
    };
    __decorate([
        deprecated
    ], UISelect.prototype, "someOldMethod", null);
    UISelect = __decorate([
        uielement
    ], UISelect);
    return UISelect;
}());
var log = new LoggingService();
log.history = [];
var uiSelect = new UISelect();
uiSelect.someOldMethod();
