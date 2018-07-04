class Lift {
    _name: string;
    constructor(name: string = 'Chris') {
        this._name = name;
        alert(this._name);
    }
}

var lift = new Lift('Tracie');