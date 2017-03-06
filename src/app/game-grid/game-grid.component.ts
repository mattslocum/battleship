import {Component, OnInit, Input, QueryList, ViewChildren, ChangeDetectorRef} from '@angular/core';
import {Player} from "../objects/Player";
import {GridShipComponent} from "../grid-ship/grid-ship.component";
import {Ship} from "../objects/Ship";

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.css']
})
export class GameGridComponent implements OnInit {
    public gridSize : number = 12;
    @Input() public player : Player;
    @ViewChildren(GridShipComponent) private ships: QueryList<GridShipComponent>;

    constructor() { }

    ngOnInit() {
    }

    public gridArray() {
        return new Array(this.gridSize);
    }

    public rotateSelectedShip() : void {

    }

    get selectedShip() : Ship {
        if (!this.ships) {
            return;
        }

        return (this.ships.find((shipComponent) => {
            return shipComponent.isSelected;
        }) || {})['ship'];
    }
}
