define(["require", "exports", './Lift', './Floor', './Shaft'], function (require, exports, Lift_1, Floor_1, Shaft_1) {
    function CreateBuilding() {
        var lift = new Lift_1.Lift('Lift 1');
        var floors = new Array();
        for (var ct = 0; ct < 10; ct++) {
            floors.push(new Floor_1.Floor(ct));
        }
        var shaft = new Shaft_1.Shaft('Shaft 1', lift, floors);
        return {
            shaft: shaft
        };
    }
    exports.CreateBuilding = CreateBuilding;
});
