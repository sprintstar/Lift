/// <reference path="lift.ts" />
var Shaft = (function () {
    function Shaft(name, lift) {
        this._name = name;
        this._lift = lift;
        console.log('New Shaft created (' + this._name + ') containing lift ' + lift._name);
    }
    return Shaft;
})();
