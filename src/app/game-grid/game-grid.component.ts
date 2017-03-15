import {Component, OnInit, Input, QueryList, ViewChildren, ChangeDetectorRef} from '@angular/core';
import {Player} from "../objects/Player";
import {GridShipComponent} from "../grid-ship/grid-ship.component";
import {Ship} from "../objects/Ship";
import {GridCellComponent} from "../grid-cell/grid-cell.component";
import {ActivatedRoute} from "@angular/router";
import BasicProfile = gapi.auth2.BasicProfile;
import {Game} from "../objects/Game";
import {GameService} from "../service/game.service";
import {ShotService} from "../service/shot.service";
import {IShot} from "../objects/interfaces";

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.css']
})
export class GameGridComponent implements OnInit {
    public gridSize : number = 12;
    public selectedCell : GridCellComponent;
    private game : Game;
    @Input() public player : Player;

    @ViewChildren(GridShipComponent)
    private ships: QueryList<GridShipComponent>;

    @ViewChildren(GridCellComponent)
    private cells: QueryList<GridCellComponent>;

    constructor(
        private gameService : GameService,
        private shotService : ShotService,
    ) {}

    ngOnInit() {
        this.gameService.getGameObservable().subscribe((game) => {
            if (!this.game) { // so we only bind the first time we get a game.
                this.shotService.getShots(game.gameID).subscribe(this.handleShotUpdate.bind(this));
            }
            this.game = game;
        });

        // this.route.data
        //     .subscribe(({ profile, game } : { profile : BasicProfile, game : Game }) => {
        //         this.player = game.getPlayer(profile.getId());
        //         this.game = game;
        //     });
    }

    public gridArray() {
        return new Array(this.gridSize);
    }

    public cellSelected(selected : GridCellComponent) {
        this.selectedCell = selected;
        this.cells.forEach((cell) => cell.setSelection(selected));
    }

    private handleShotUpdate(shots : IShot[]) {
        debugger;
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
