import {Component, OnInit, Input} from '@angular/core';
import {Ship} from "../objects/Ship";
import {GameService} from "../service/game.service";
import {Game, GameStatus} from "../objects/Game";
import {Router, ActivatedRoute, UrlSegment} from "@angular/router";
import {ROUTE_PART_SETUP, ROUTE_PART_PLAY} from "../objects/consts";
import {PlayerService} from "../service/player.service";
import BasicProfile = gapi.auth2.BasicProfile;
import {Player} from "../objects/Player";
import {GridCellComponent} from "../grid-cell/grid-cell.component";
import {ShotService} from "../service/shot.service";
import {IShot} from "../objects/interfaces";
import {GameGridComponent} from "../game-grid/game-grid.component";

@Component({
    selector: 'app-game-controls',
    templateUrl: './game-controls.component.html',
    styleUrls: ['./game-controls.component.css'],
    host: {
        // Doing this because during setup the ships setup events that we need to prevent triggering
        "(mousedown)" : "$event.stopPropagation()",
        "(touchstart)" : "$event.stopPropagation()",
        "(touchmove)" : "$event.stopPropagation()"
    }
})
export class GameControlsComponent implements OnInit {
    @Input() public selectedShip : Ship;
    @Input() public selectedCell : GridCellComponent;
    private game : Game;
    private playerId : string;
    public doingSetup : boolean;
    public playing : boolean;
    public waiting : boolean = false;
    public validPositions : boolean = true;
    public player : Player;
    public shotsRemaining : number = 0;
    private listeningForShots : boolean = false;
    public waitingPlayer : Player;
    private shots : IShot[] = [];
    public playerWinner : string;

    constructor(
        private route : ActivatedRoute,
        private router : Router,
        private playerService : PlayerService,
        private gameService : GameService,
        private shotService : ShotService
    ) {}

    public ngOnInit() {
        this.game = this.gameService.getGame();
        this.gameService.getGameObservable().subscribe(this.handleGameUpdate.bind(this));

        this.route.data
            .subscribe(({ profile } : { profile : BasicProfile }) => {
                this.playerId = profile.getId();
                this.player = this.game.getPlayer(this.playerId);
                this.handleGameUpdate(this.game);
            });

        this.route.url
            .subscribe((parts : UrlSegment[]) => {
                this.doingSetup = parts[parts.length - 1].path == ROUTE_PART_SETUP;
                this.playing = !this.doingSetup && parts[0].path == ROUTE_PART_PLAY;
            });
    }

    public ngDoCheck() {
        if (this.doingSetup) {
            this.validPositions = this.game.getPlayer(this.playerId).validShipPositions();
        }
    }

    public rotateShip() : void {
        this.selectedShip.rotate();
    }

    public startGame() : void {
        this.gameService.startGame();
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    public lockShips() : void {
        this.player.lockShips();
        this.gameService.savePlayersGame(this.playerId);
    }

    private handleGameUpdate(game) : void {
        if (!game) {
            return;
        }
        this.game = game;
        if (!this.player) {
            return;
        }

        if (game.status == GameStatus.SETUP && this.player.locked) {
            this.waiting = game.players.some((player) => {
                return !player.locked;
            });
        } else if (game.status == GameStatus.PLAYING) {
            if (!this.listeningForShots) {
                this.shotService.playerTurn(this.game.gameID).subscribe(this.handlePlayerUpdate.bind(this));
                this.listeningForShots = true;
            }
        }
    }

    private handlePlayerUpdate(playerID : string) : void {
        if (!playerID) {
            // game is starting. Player 1 goes first.
            playerID = this.game.players[0].id;
        }

        let playerIndex : number;
        this.game.players.some((player, index) => {
            if (player.id == playerID) {
                playerIndex = index;
                return true;
            }
        });

        this.waitingPlayer = undefined;

        for (let i = 1; i < this.game.players.length; i++) {
            let newPlayerIndex = (i + playerIndex) % this.game.players.length;

            if (this.game.players[newPlayerIndex].shipsRemaining() > 0) {
                if (this.game.players[newPlayerIndex] == this.player) {
                    this.shotsRemaining = this.player.shipsRemaining();
                } else {
                    this.waitingPlayer = this.game.players[newPlayerIndex];
                }
                break;
            }
        }

        if (!this.waitingPlayer && !this.shotsRemaining) {
            // then last player to shoot wins
            this.playerWinner = this.game.players[playerIndex].name;
            this.playing = false;
        }
    }

    public fire() : void {
        this.shots.push({
            x: this.selectedCell.x,
            y: this.selectedCell.y,
            playerID : this.playerId
        });
        this.shotsRemaining--;
        this.selectedCell.shoot();

        if (this.shotsRemaining == 0) {
            this.shotService.fire(this.shots);
            this.shots = [];
        }
    }
}
