import { Component, OnInit } from '@angular/core';
import {Game} from "../objects/Game";
import {GameService} from "../service/game.service";
import {PlayerService} from "../service/player.service";
import {ActivatedRoute, UrlSegment} from "@angular/router";
import {SETUP_ROUTE_PART} from "../objects/consts";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    public game : Game;
    public playerName : string = "Matt";
    public positioning : boolean = true;

    constructor(
        private route : ActivatedRoute,
        private gameService : GameService,
        private playerService : PlayerService
    ) { }

    ngOnInit() {
        this.game = this.gameService.getGame();
        this.game.createPlayer(this.playerService.playerName);

        this.route.url
            .subscribe((parts : UrlSegment[]) => {
                this.positioning = parts[parts.length - 1].path == SETUP_ROUTE_PART;
            });
    }

}
