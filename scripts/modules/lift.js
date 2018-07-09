define(["require", "exports"], function (require, exports) {
    var Lift = (function () {
        function Lift(name) {
            if (name === void 0) { name = 'Lift'; }
            this._name = name;
            console.log('New Lift created: ' + this._name);
        }
        return Lift;
    })();
    exports.Lift = Lift;
});
