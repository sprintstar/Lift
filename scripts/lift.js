var Lift = (function () {
    function Lift(name) {
        if (name === void 0) { name = 'Chris'; }
        this._name = name;
        alert(this._name);
    }
    return Lift;
})();
var lift = new Lift('Tracie');
