var Lift = (function () {
    function Lift(name) {
        if (name === void 0) { name = 'Chris'; }
        this._name = name;
        console.log('New Lift created: ' + this._name);
    }
    return Lift;
})();
