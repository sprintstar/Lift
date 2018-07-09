import { Lift } from './Lift';
import { Floor } from './Floor';
import { Shaft } from './Shaft';

export function CreateBuilding() {
    let lift = new Lift('Lift 1');

    var floors = new Array<Floor>();
    for (var ct = 0; ct < 10; ct++) {
        floors.push(new Floor(ct));
    }

    let shaft = new Shaft(lift, floors, 'Shaft 1');

    return {
        shaft: shaft
    }
}