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
            this.fbShots = this.firebase.database.list(`${SHOT_ENDPOINT}/${gameID}`);
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

    // TODO: Do we always have a fbShots list by now?
    public fire(position : ICord) : void {
        if (this.profile) {
            this.fbShots.push({
                x: position.x,
                y: position.y,
                playerID: this.profile.getId()
            });
        } else {
            this.playerService.getUserProfile().then((playerProfile) => {
                this.profile = playerProfile;
                this.fbShots.push({
                    x: position.x,
                    y: position.y,
                    playerID: this.profile.getId()
                });
            });
        }
    }

    // public isMyTurn() : Observable<boolean> {
    //
    // }
}
