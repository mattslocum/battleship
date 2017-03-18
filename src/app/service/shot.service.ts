import {Injectable} from "@angular/core";
import {Game, GameStatus} from "../objects/Game";
import BasicProfile = gapi.auth2.BasicProfile;
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Player} from "../objects/Player";
import {Observable} from "rxjs";
import {PlayerService} from "./player.service";
import {GameService} from "./game.service";
import {ICord, IShot} from "../objects/interfaces";

const SHOT_ENDPOINT : string = 'shot';

@Injectable()
export class ShotService {
    private previousShots : {} = {};
    private fbShots : FirebaseListObservable<IShot[]>;
    private profile : BasicProfile;

    constructor(
        private firebase : AngularFire,
        private playerService : PlayerService,
        private gameService : GameService
    ) {}

    public getShots(gameID : string) : Observable<IShot[]> {
        return new Observable((observer) => {
            this.initShots(gameID);
            this.fbShots.subscribe((shotData) => {
                observer.next(shotData);
                // observer.next(shotData.filter((shot) => {
                //     let newShot : boolean = !this.previousShots[shot['$key']];
                //     this.previousShots[shot['$key']] = true;
                //     return newShot;
                // }));
            });
        });
    }

    private initShots(gameID : string) {
        if (!this.fbShots) {
            this.fbShots = this.firebase.database.list(`${SHOT_ENDPOINT}/${gameID}`);
        }
    }

    // TODO: Do we always have a fbShots list by now?
    public fire(shots : IShot[]) : void {
        shots.forEach((shot) => this.fbShots.push(shot));
    }

    public playerTurn(gameID : string) : Observable<string> {
        this.initShots(gameID);
        return this.fbShots
            // using a delay because we need the ships to get the hits registered first
            .delay(10)
            .map((shot) => {
                return shot.length == 0 ? "" : shot[shot.length - 1].playerID;
            });
    }
}
