import {Direction} from "enums/Direction";

export class Floor {
    _level: number;
    _upRequest: boolean;
    _downRequest: boolean;

    constructor(level: number) {
        this._level = level;
        console.log('New level created: ' + this._level);
    }

    requestStop(direction: Direction) {
        if (direction === Direction.Down) {
            this._downRequest = true;
        } else if (direction === Direction.Up) {
            this._upRequest = true;
        }
    }

    clearStopRequest(direction: Direction) {
        if (direction === Direction.Down) {
            this._downRequest = false;
        } else if (direction === Direction.Up) {
            this._upRequest = false;
        }
    }
}