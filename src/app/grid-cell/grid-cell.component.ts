import {Component, OnInit, HostListener, Output, EventEmitter, Input} from '@angular/core';
import {Game} from "../objects/Game";
import {Ship} from "../objects/Ship";

const colors : string[] = [
    'blue',
    'orange',
    'red',
    'green',
    'purple',
    'darkblue'
];

@Component({
  selector: 'grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.css']
})
export class GridCellComponent implements OnInit {

    public isSelected : boolean = false;
    public hits : string[] = [];

    @Input()
    public x : number;
    @Input()
    public y : number;

    @Output()
    public selected : EventEmitter<GridCellComponent> = new EventEmitter<GridCellComponent>();

    constructor() { }

    public ngOnInit() {
    }

    public select() {
        this.isSelected = true;
        this.selected.emit(this);
    }

    public setSelection(event : any) {
        if (event != this) {
            this.isSelected = false;
        }
    }

    public hitCell(ships : Ship[]) : void {
        this.hits = ships.map((ship) => {
            return colors[ship['playerIndex']];
        });
    }
}
