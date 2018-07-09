export class Floor {
    _level: number;
    constructor(level: number) {
        this._level = level;
        console.log('New level created: ' + this._level);
    }
}