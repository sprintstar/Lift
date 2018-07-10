define(["require", "exports", "enums/Direction"], function (require, exports, Direction_1) {
    var Floor = (function () {
        function Floor(level) {
            this._level = level;
            console.log('New level created: ' + this._level);
        }
        Floor.prototype.requestStop = function (direction) {
            if (direction === Direction_1.Direction.Down) {
                this._downRequest = true;
            }
            else if (direction === Direction_1.Direction.Up) {
                this._upRequest = true;
            }
        };
        Floor.prototype.clearStopRequest = function (direction) {
            if (direction === Direction_1.Direction.Down) {
                this._downRequest = false;
            }
            else if (direction === Direction_1.Direction.Up) {
                this._upRequest = false;
            }
        };
        return Floor;
    })();
    exports.Floor = Floor;
});
