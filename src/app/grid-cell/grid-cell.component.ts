import {Component, OnInit, HostListener, Output, EventEmitter, Input} from '@angular/core';
import {Game} from "../objects/Game";
import {Ship} from "../objects/Ship";
import {ActivatedRoute, UrlSegment} from "@angular/router";
import {ROUTE_PART_SETUP} from "../objects/consts";

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
    public shotPending : boolean = false;
    public miss : boolean = false;

    @Input()
    public x : number;
    @Input()
    public y : number;

    @Output()
    public selected : EventEmitter<GridCellComponent> = new EventEmitter<GridCellComponent>();

    constructor(
        private route : ActivatedRoute
    ) { }

    public ngOnInit() {
    }

    public select() {
        // TODO: 3 isn't a good way to check for playing
        if (this.route.snapshot.url.length != 3) {
            this.isSelected = true;
            this.selected.emit(this);
        }
    }

    public setSelection(event : any) {
        if (event != this) {
            this.isSelected = false;
        }
    }

    public hitCell(ships : Ship[]) : void {
        this.shotPending = false;
        this.miss = !ships.length;

        this.hits = ships.map((ship) => {
            return colors[ship['playerIndex']];
        });
    }

    public shoot() : void {
        this.shotPending = true;
    }
}
