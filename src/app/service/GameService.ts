import {Injectable, EventEmitter} from "@angular/core";
import {Game} from "../objects/Game";

@Injectable()
export class GameService {
    // private gameEvent : EventEmitter<any> = new EventEmitter();

    constructor(
    ) {}

    public newGame() {
        return new Game();
    }
// {
    // "players": [{
    //     "name": "asdf",
    //     "ships": [{
    //         "name": "Carrier",
    //         "status": "",
    //         "size": 5,
    //         "direction": 0,
    //         "position": [{
    //             "y": 0,
    //             "x": 0
    //         }],
    //         "hit": [0, 0, 0, 0, 0]
    //     }, {
    //         "name": "Battleship",
    //         "status": "",
    //         "size": 4,
    //         "direction": 0,
    //         "position": [{
    //             "y": 1,
    //             "x": 0
    //         }],
    //         "hit": [0, 0, 0, 0]
    //     }, {
    //         "name": "Cruiser",
    //         "status": "",
    //         "size": 3,
    //         "direction": 0,
    //         "position": [{
    //             "y": 2,
    //             "x": 0
    //         }],
    //         "hit": [0, 0, 0]
    //     }, {
    //         "name": "Destroyer",
    //         "status": "",
    //         "size": 3,
    //         "direction": 0,
    //         "position": [{
    //             "y": 3,
    //             "x": 0
    //         }],
    //         "hit": [0, 0, 0]
    //     }, {
    //         "name": "Submarine",
    //         "status": "",
    //         "size": 2,
    //         "direction": 0,
    //         "position": [{
    //             "y": 4,
    //             "x": 0
    //         }],
    //         "hit": [0, 0]
    //     }]
    // }],
    // "type": "singleGrid",
    // "state": "join"
// }
}
