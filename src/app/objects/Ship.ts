import {ICord} from "./interfaces";

export const ShipTypes = {
    Carrier : "Carrier",
    Battleship : "Battleship",
    Cruiser : "Cruiser",
    Destroyer : "Destroyer",
    Submarine : "Submarine",
};

// type ShipType = "Carrier" | "Battleship" | "Cruiser" | "Destroyer" | "Submarine";

export class Ship {
    public size : number;
    public angle : number = 0;
    public position : ICord;
    public hits : number[];
    public status : string = "";

    constructor(
        public readonly type : string
    ) {
        this.initShip();
    }

    private initShip() {
        switch (this.type) {
            case ShipTypes.Carrier:
                this.size = 5;
                this.position = {
                    x: 0,
                    y: 0
                };
                break;
            case ShipTypes.Battleship:
                this.size = 4;
                this.position = {
                    x: 0,
                    y: 1
                };
                break;
            case ShipTypes.Cruiser:
                this.size = 3;
                this.position = {
                    x: 0,
                    y: 2
                };
                break;
            case ShipTypes.Destroyer:
                this.size = 3;
                this.position = {
                    x: 0,
                    y: 3
                };
                break;
            case ShipTypes.Submarine:
                this.size = 2;
                this.position = {
                    x: 0,
                    y: 4
                };
                break;
        }

        this.hits = new Array(this.size);
    }

    get shipHeight() : number {
        return this.angle == 0 ? 1 : this.size;
    }

    get shipWidth() : number {
        return this.angle == 90 ? 1 : this.size;
    }

    public rotate() : void {
        this.angle = (this.angle + 45) % 180
    }
}
