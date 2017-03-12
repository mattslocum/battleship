import {Injectable} from "@angular/core";
import {Game, GameStatus} from "../objects/Game";
import BasicProfile = gapi.auth2.BasicProfile;
import {AngularFire} from "angularfire2";
import {Player} from "../objects/Player";

// <script src="https://www.gstatic.com/firebasejs/3.7.1/firebase.js"></script>
//     <script>
// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyBPz8WD91uJ5IX_qQdKASFQdaA2iuonzHo",
//     authDomain: "battleship-161001.firebaseapp.com",
//     databaseURL: "https://battleship-161001.firebaseio.com",
//     storageBucket: "battleship-161001.appspot.com",
//     messagingSenderId: "244043521193"
// };
// firebase.initializeApp(config);
// </script>

@Injectable()
export class GameService {
    // private gameEvent : EventEmitter<any> = new EventEmitter();
    private game : Game;

    constructor(
        private firebase : AngularFire
    ) {}

    public createGame(player : BasicProfile) : Promise<number> {
        return new Promise((resolve, reject) => {
            // using 4 digits so we don't have huge URLs
            // 36^4 == 1,679,616, so that is a lot of games, not that we want to get even close to
            // that or finding unique ID might get really expensive
            this.getUniqueID(4).then((gameID) => {
                this.game = new Game(gameID, player.getId());
                this.game.createPlayer(player);

                this.firebase.database.object(`games/${gameID}`).set(this.game);

                // TODO: after firebase success
                resolve(gameID);
            });
        });
    }

    public getGame() : Game {
        return this.game;
    }

    public fetchGame(gameID : string) : Promise<Game> {
        return new Promise((resolve, reject) => {
            if (this.game) {
                resolve(this.game);
            } else {
                this.firebase.database.object(`games/${gameID}`).take(1).subscribe((data) => {
                    if (data.$exists()) {
                        this.game = new Game(gameID, data.ownerID);
                        this.game.initFromData(data);
                        resolve(this.game);
                    } else {
                        reject();
                    }
                });
            }
        });
    }

    private getUniqueID(size : number) : Promise<string> {
        // TODO: implement a way to lock so 2 simultaneous games can't start at the same time
        return new Promise((resolve, reject) => {
            // better answers: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            let id: string = Math.random().toString(36).substring(2, size + 2);
            this.firebase.database.object(`games/${id}`).take(1).subscribe((data) => {
                if (data.$exists()) {
                    // oops. Lets try again.
                    // TODO: implement max-retries
                    resolve(this.getUniqueID(size));
                } else {
                    // yay. found one
                    resolve(id);
                }
            });
        });
    }

    public savePlayersGame(playerId : string) {
        let player : Player = this.game.getPlayer(playerId);
        let playerIndex : number = this.game.players.indexOf(player);
        this.firebase.database.object(`games/${this.game.gameID}/players/${playerIndex}`).update(player)
    }

    public startGame() {
        this.game.status = GameStatus.PLAYING;
        this.firebase.database.object(`games/${this.game.gameID}`).update({
            status : this.game.status
        })
    }

// {
    // "players": [{
    //     "name": "asdf",
    //     "ships": [{
    //         "name": "Carrier",
    //         "status": "",
    //         "size": 5,
    //         "direction": 0,
    //         "position": [{
    //             "y": 0,
    //             "x": 0
    //         }],
    //         "hit": [0, 0, 0, 0, 0]
    //     }, {
    //         "name": "Battleship",
    //         "status": "",
    //         "size": 4,
    //         "direction": 0,
    //         "position": [{
    //             "y": 1,
    //             "x": 0
    //         }],
    //         "hit": [0, 0, 0, 0]
    //     }, {
    //         "name": "Cruiser",
    //         "status": "",
    //         "size": 3,
    //         "direction": 0,
    //         "position": [{
    //             "y": 2,
    //             "x": 0
    //         }],
    //         "hit": [0, 0, 0]
    //     }, {
    //         "name": "Destroyer",
    //         "status": "",
    //         "size": 3,
    //         "direction": 0,
    //         "position": [{
    //             "y": 3,
    //             "x": 0
    //         }],
    //         "hit": [0, 0, 0]
    //     }, {
    //         "name": "Submarine",
    //         "status": "",
    //         "size": 2,
    //         "direction": 0,
    //         "position": [{
    //             "y": 4,
    //             "x": 0
    //         }],
    //         "hit": [0, 0]
    //     }]
    // }],
    // "type": "singleGrid",
    // "state": "join"
// }
}
