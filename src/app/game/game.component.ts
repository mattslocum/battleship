import { Component, OnInit } from '@angular/core';
import {Game, GameStatus} from "../objects/Game";
import {GameService} from "../service/game.service";
import {PlayerService} from "../service/player.service";
import {ActivatedRoute, UrlSegment, Router} from "@angular/router";
import {ROUTE_PART_SETUP, ROUTE_PART_PLAY} from "../objects/consts";
import BasicProfile = gapi.auth2.BasicProfile;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    public game : Game;
    public playerId : string;
    public positioning : boolean = true;

    constructor(
        private route : ActivatedRoute,
        private router : Router,
        private gameService : GameService,
    ) {}

    ngOnInit() {
        this.route.data
            .subscribe(({ player, game } : { player : BasicProfile, game : Game }) => {
                this.playerId = player.getId();
                this.game = game;
                this.positioning = game.status == GameStatus.SETUP;
            });

        // validate URL
        this.route.url
            .subscribe((parts : UrlSegment[]) => {
                if (this.game) {
                    if (parts[parts.length - 1].path == ROUTE_PART_SETUP && this.game.status != GameStatus.SETUP) {
                        this.router.navigate(['../']);
                    } else if (parts[parts.length - 1].path != ROUTE_PART_SETUP && this.game.status == GameStatus.SETUP) {
                        this.router.navigate(['./setup'], { relativeTo: this.route });
                    }
                }
            });
    }

    private setupGame() {
        this.game = this.gameService.getGame();
    }

}
