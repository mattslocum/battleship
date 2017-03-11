import { Component, OnInit } from '@angular/core';
import {Game} from "../objects/Game";
import {GameService} from "../service/game.service";
import {PlayerService} from "../service/player.service";
import {
    ActivatedRoute, UrlSegment, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from "@angular/router";
import {ROUTE_PART_SETUP} from "../objects/consts";
import BasicProfile = gapi.auth2.BasicProfile;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    public game : Game;
    public playerName : string;
    public positioning : boolean = true;

    constructor(
        private route : ActivatedRoute,
        private gameService : GameService,
    ) {}

    ngOnInit() {
        this.route.data
            .subscribe(({ player } : { player : BasicProfile }) => {
                this.playerName = player.getName();
            });

        this.route.url
            .subscribe((parts : UrlSegment[]) => {
                this.positioning = parts[parts.length - 1].path == ROUTE_PART_SETUP;
                if (this.positioning) {
                    this.setupGame();
                }
            });
    }

    private setupGame() {
        this.game = this.gameService.getGame();
        this.game.createPlayer(this.playerName);
    }

}
