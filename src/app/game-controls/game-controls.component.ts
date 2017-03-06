import {Component, OnInit, Input, NgZone} from '@angular/core';
import {Ship} from "../objects/Ship";

@Component({
    selector: 'app-game-controls',
    templateUrl: './game-controls.component.html',
    styleUrls: ['./game-controls.component.css'],
    host: {
        // Doing this because during setup the ships setup events that we need to prevent triggering
        "(mousedown)" : "$event.stopPropagation()"
    }
})
export class GameControlsComponent implements OnInit {
    @Input() public selectedShip : Ship;

    constructor(
        private zone : NgZone
    ) { }

    ngOnInit() {
    }


    public rotateShip() : void {
        this.zone.run(() => {
            this.selectedShip.rotate();
        });
    }
}
