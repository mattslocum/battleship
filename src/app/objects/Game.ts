import {Player} from "./Player";

export class Game {
    public players : Player[] = [];

    public createPlayer(name : string) {
        this.players.push(new Player(name))
    }

    public getPlayer(name : string) {
        for (let player of this.players) {
            if (player.name == name) {
                return player;
            }
        }
    }
}
