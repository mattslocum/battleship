import { Component, OnInit } from '@angular/core';
import {Game, GameStatus} from "../objects/Game";
import {GameService} from "../service/game.service";
import {PlayerService} from "../service/player.service";
import {ActivatedRoute, UrlSegment, Router} from "@angular/router";
import {ROUTE_PART_SETUP, ROUTE_PART_PLAY} from "../objects/consts";
import BasicProfile = gapi.auth2.BasicProfile;
import {Player} from "../objects/Player";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    public game : Game;
    public player : Player;
    public positioning : boolean = true;

    constructor(
        private route : ActivatedRoute,
        private router : Router,
        private gameService : GameService,
    ) {}

    ngOnInit() {
        // TODO: Figure out how to get observable off of route data
        this.gameService.getGameObservable().subscribe(this.handleGame.bind(this));

        this.route.data
            .subscribe(({ profile, game } : { profile : BasicProfile, game : Game }) => {
                this.player = game.getPlayer(profile.getId());
                // this.game = game;
                // this.positioning = game.status == GameStatus.SETUP;
            });

        // validate URL
        this.route.url
            .subscribe((parts : UrlSegment[]) => {
                if (this.game) {
                    this.validateRoute();
                }
            });
    }

    private validateRoute() {
        let parts : UrlSegment[] = this.route.snapshot.url;
        if (parts[parts.length - 1].path == ROUTE_PART_SETUP && this.game.status != GameStatus.SETUP) {
            this.router.navigate(['../'], { relativeTo: this.route });
        } else if (parts[parts.length - 1].path != ROUTE_PART_SETUP && this.game.status == GameStatus.SETUP) {
            this.router.navigate(['./setup'], { relativeTo: this.route });
        }
    }

    private handleGame(game : Game) {
        this.gameService.getGameObservable().subscribe((game) => {
            this.game = game;
            this.positioning = game.status == GameStatus.SETUP;
            this.validateRoute();
        });
    }

}
