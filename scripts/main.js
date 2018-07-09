///<reference path='requirejs/require.d.ts' />
requirejs([
    'modules/building'
], function (building) {
    building.CreateBuilding();
    console.log('building loaded', building);
});
