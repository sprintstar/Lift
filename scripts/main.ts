///<reference path='requirejs/require.d.ts' />
///<reference path='models/lift.ts' />
///<reference path='models/shaft.ts' />
///<reference path='models/floor.ts' />

requirejs([
    '/scripts/models/lift.js',
    '/scripts/models/shaft.js',
    '/scripts/models/floor.js'
], function (util) {
    //This function is called when scripts/lift.js is loaded.
    //If lift.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    var lift = new Lift('Tracie');
    var floors = new Array<Floor>();

    for (var ct = 0; ct < 10; ct++) {
        floors.push(new Floor(ct));
    }

    var shaft = new Shaft('Shaft A', lift, floors);
});
