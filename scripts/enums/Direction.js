define(["require", "exports"], function (require, exports) {
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
    })(exports.Direction || (exports.Direction = {}));
    var Direction = exports.Direction;
    ;
});
