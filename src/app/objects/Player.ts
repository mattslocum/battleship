import {Ship, ShipTypes} from "./Ship";
import {Injectable} from "@angular/core";
import {ICord} from "./interfaces";
import BasicProfile = gapi.auth2.BasicProfile;

export class Player {
    public ships : Ship[] = [];
    public locked : boolean = false;

    constructor(
        public id : string,
        public name : string,
        ships ?: Ship[],
        locked ?: boolean
    ) {
        this.initShips(ships);
        this.locked = this.locked || !!locked;
    }

    private initShips(ships ?: Ship[]) {
        if (ships) {
            this.ships = ships;
            this.ships.forEach((shipData, pos) => {
                this.ships[pos] = Object.assign(new Ship(this.id, shipData.type), shipData);
            });
        } else {
            this.ships.push(new Ship(this.id, ShipTypes.Carrier));
            this.ships.push(new Ship(this.id, ShipTypes.Battleship));
            this.ships.push(new Ship(this.id, ShipTypes.Cruiser));
            this.ships.push(new Ship(this.id, ShipTypes.Destroyer));
            this.ships.push(new Ship(this.id, ShipTypes.Submarine));
        }
    }

    public validShipPositions() : boolean {
        let validPos : boolean = true,
            positions : any = {};

        this.ships.some((ship) => {
            if (!validPos) {
                return true;
            }

            ship.getCells().forEach((pos) => {
                if (typeof positions[pos.y] == "undefined") {
                    positions[pos.y] = {};
                }
                if (positions[pos.y][pos.x]) {
                    validPos = false;
                } else {
                    positions[pos.y][pos.x] = true;
                }
            });
        });

        return validPos;
    }

    public lockShips() : void {
        this.locked = true;
    }

    public hitShips(cord : ICord) : any[] {
        let hits : any[] = [];

        this.ships.some((ship) => {
            if (ship.hitShip(cord)) {
                hits.push(ship);
                return true;
            }
        });

        return hits;
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
