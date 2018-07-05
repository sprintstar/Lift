///<reference path="lift.ts" />
///<reference path="floor.ts" />
var Shaft = (function () {
    function Shaft(name, lift, floors) {
        this._name = name;
        this._lift = lift;
        this._floors = floors;
        console.log('New Shaft created (' + this._name + ') containing lift ' + lift._name + ' and ' + this._floors.length + ' floors');
    }
    return Shaft;
})();
