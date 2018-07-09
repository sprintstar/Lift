///<reference path='requirejs/require.d.ts' />

requirejs([
    'modules/building'
], function (building) {
    var shaft = building.CreateBuilding();
    console.log('building loaded', shaft);
});
