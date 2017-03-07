import {Component, OnInit, Input} from '@angular/core';
import {Ship} from "../objects/Ship";
import {GameService} from "../service/game.service";
import {Game} from "../objects/Game";
import {Router, ActivatedRoute, UrlSegment} from "@angular/router";
import {SETUP_ROUTE_PART, PLAY_ROUTE_PART} from "../objects/consts";
import {PlayerService} from "../service/player.service";

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
    private game : Game;
    public doingSetup : boolean;
    public playing : boolean;
    public validPositions : boolean = true;

    constructor(
        private route : ActivatedRoute,
        private router : Router,
        private playerService : PlayerService,
        gameService : GameService
    ) {
        this.game = gameService.getGame();
    }

    public ngOnInit() {
        this.route.url
            .subscribe((parts : UrlSegment[]) => {
                this.doingSetup = parts[parts.length - 1].path == SETUP_ROUTE_PART;
                this.playing = !this.doingSetup && parts[0].path == PLAY_ROUTE_PART;
                console.log(this.playing);
            });
    }

    public ngDoCheck() {
        if (this.doingSetup) {
            this.validPositions = this.game.getPlayer(this.playerService.playerName).validShipPositions();
        }
    }

    public rotateShip() : void {
        this.selectedShip.rotate();
    }

    public startGame() : void {
        // this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    public fire() : void {
    }
}
