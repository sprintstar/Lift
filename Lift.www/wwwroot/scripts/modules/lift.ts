export class Lift {
    _name: string;
    constructor(name: string = 'Lift') {
        this._name = name;
        console.log('New Lift created: ' + this._name);
    }
}
