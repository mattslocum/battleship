import {Ship, ShipTypes} from "./Ship";
import {Injectable} from "@angular/core";

export class Player {
    public ships : Ship[] = [];

    constructor(
        public name : string
    ) {
        this.initShips();
    }

    private initShips() {
        this.ships.push(new Ship(ShipTypes.Carrier));
        this.ships.push(new Ship(ShipTypes.Battleship));
        this.ships.push(new Ship(ShipTypes.Cruiser));
        this.ships.push(new Ship(ShipTypes.Destroyer));
        this.ships.push(new Ship(ShipTypes.Submarine));
    }
   /*  {
   "players": [{
        "name": "asdf",
        "ships": [{
            "name": "Carrier",
            "status": "",
            "size": 5,
            "direction": 0,
            "position": [{
                "y": 0,
                "x": 0
            }],
            "hit": [0, 0, 0, 0, 0]
        }, {
            "name": "Battleship",
            "status": "",
            "size": 4,
            "direction": 0,
            "position": [{
                "y": 1,
                "x": 0
            }],
            "hit": [0, 0, 0, 0]
        }, {
            "name": "Cruiser",
            "status": "",
            "size": 3,
            "direction": 0,
            "position": [{
                "y": 2,
                "x": 0
            }],
            "hit": [0, 0, 0]
        }, {
            "name": "Destroyer",
            "status": "",
            "size": 3,
            "direction": 0,
            "position": [{
                "y": 3,
                "x": 0
            }],
            "hit": [0, 0, 0]
        }, {
            "name": "Submarine",
            "status": "",
            "size": 2,
            "direction": 0,
            "position": [{
                "y": 4,
                "x": 0
            }],
            "hit": [0, 0]
        }]
    }],
    "type": "singleGrid",
    "state": "join"
}*/
}
