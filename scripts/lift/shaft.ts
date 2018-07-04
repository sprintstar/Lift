/// <reference path="lift.ts" />

class Shaft {

    _name: string;

    _lift: Lift;

    constructor(name: string, lift: Lift) {
        this._name = name;
        this._lift = lift;
        console.log('New Shaft created (' + this._name + ') containing lift ' + lift._name);
    }
}