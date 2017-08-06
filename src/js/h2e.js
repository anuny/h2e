!function (win, factory) {
    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        win.h2e = factory();
    }
}(window, function () {
	//=import @parse.js
});