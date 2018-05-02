var Test = /** @class */ (function () {
    function Test() {
        var _this = this;
        this.publishDate = 2016;
        setInterval(function () {
            console.log(_this.publishDate);
        }, 1000);
    }
    return Test;
}());
var test = new Test();
function PublicationMessage(year) {
    return 'Date published: ' + year;
}
var publishFunc;
publishFunc = PublicationMessage;
publishFunc = function (num) {
    var string = '';
    return string;
};
publishFunc = function (num) { return ''; };
var message = publishFunc(2016, 'a message here');
