import {Component, OnInit, Input} from '@angular/core';
import {Ship} from "../objects/Ship";
import {GameService} from "../service/game.service";
import {Game} from "../objects/Game";
import {Router, ActivatedRoute, UrlSegment} from "@angular/router";
import {ROUTE_PART_SETUP, ROUTE_PART_PLAY} from "../objects/consts";
import {PlayerService} from "../service/player.service";
import BasicProfile = gapi.auth2.BasicProfile;

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
    private playerName : string;
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
        this.route.data
            .subscribe(({ player } : { player : BasicProfile }) => {
                this.playerName = player.getName();
            });

        this.route.url
            .subscribe((parts : UrlSegment[]) => {
                this.doingSetup = parts[parts.length - 1].path == ROUTE_PART_SETUP;
                this.playing = !this.doingSetup && parts[0].path == ROUTE_PART_PLAY;
            });
    }

    public ngDoCheck() {
        if (this.doingSetup) {
            this.validPositions = this.game.getPlayer(this.playerName).validShipPositions();
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
