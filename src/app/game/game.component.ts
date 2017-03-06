import { Component, OnInit } from '@angular/core';
import {Game} from "../objects/Game";
import {GameService} from "../service/GameService";

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
        private gameService : GameService
    ) { }

    ngOnInit() {
        this.game = this.gameService.newGame();
        this.game.createPlayer(this.playerName);
    }

}
