var CellPhone = /** @class */ (function () {
    function CellPhone(screen) {
        this.screen = screen;
    }
    return CellPhone;
}());
var iphone = new CellPhone('4k');
iphone.screen; //4k
var android = new CellPhone('780p');
android.screen; //720p
