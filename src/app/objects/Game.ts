import {Player} from "./Player";
import BasicProfile = gapi.auth2.BasicProfile;

export enum GameStatus {
    SETUP,
    PLAYING
}

export class Game {
    public players : Player[] = [];
    public status : number = GameStatus.SETUP;

    constructor(
        public gameID : string,
        public ownerID : string
    ) {}

    public initFromData(data : any) {
        this.status = data.status;
        this.players = data.players.map(this.makePlayerFromData);
    }

    public createPlayer(player : BasicProfile) {
        this.players.push(new Player(player.getId(), player.getName()));
    }

    public addPlayerFromData(playerData : any) {
        this.players.push(this.makePlayerFromData(playerData));
    }

    public makePlayerFromData(playerData : any) : Player {
        return new Player(playerData.id, playerData.name, playerData.ships, playerData.locked);
    }

    public getPlayer(id : string) {
        for (let player of this.players) {
            if (player.id == id) {
                return player;
            }
        }
    }
}
