requirejs(['lift/lift', 'lift/shaft'], function (util) {
    //This function is called when scripts/lift.js is loaded.
    //If lift.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

    var liftTracie = new Lift('Tracie');
    var shaft = new Shaft('Shaft A', liftTracie);
});