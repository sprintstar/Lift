define(["require", "exports"], function (require, exports) {
    var Shaft = (function () {
        function Shaft(lift, floors, name) {
            if (name === void 0) { name = 'Lift shaft'; }
            this._name = name;
            this._lift = lift;
            this._floors = floors;
            console.log('New Shaft created (' + this._name + ') containing lift ' + lift._name + ' and ' + this._floors.length + ' floors');
        }
        return Shaft;
    })();
    exports.Shaft = Shaft;
});
