import {Component, OnInit, NgZone} from '@angular/core';
import {Router} from "@angular/router";
import {PlayerService} from "../service/player.service";
import BasicProfile = gapi.auth2.BasicProfile;
import 'rxjs/add/operator/take';
import {GameService} from "../service/game.service";

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
    public playerProfile : BasicProfile;
    public gameID : string = "";
    public gameType : string = "singleGrid";
    public isSignedIn : boolean;
    public checkingLogin : boolean;

    constructor(
        private router: Router,
        private zone : NgZone,
        private playerService : PlayerService,
        private gameService : GameService
    ) { }

    ngOnInit() {
        this.getUser();

        // gapi.load('auth2', () => {
        //     (<any>gapi.auth2.init({
        //         client_id: '244043521193-0eqj994haunsb1a056fkna5ajce9juh1.apps.googleusercontent.com'
        //     })).then((GoogleAuth) => {
        //         this.zone.run(() => {
        //             $this.playerProfile = GoogleAuth.currentUser.get().getBasicProfile().getName();
        //         });
        //     }, () => {});
        // });

            // setTimeout(() => {
            //     // this.playerProfile = name;
            // }, 2000);
        // });
    }

    private getUser() {
        this.isSignedIn = false;
        this.checkingLogin = true;

        // TODO: convert to observable
        this.playerService.isSignedIn().then((isLoggedIn) => {
            this.isSignedIn = isLoggedIn;
            this.checkingLogin = false;
            if (isLoggedIn) {
                this.playerService.getUserProfile().then((playerProfile) => {
                    this.zone.run(() => {
                        this.playerProfile = playerProfile;
                    });
                });
            }
        });
    }

    createGame() {
        this.gameService.createGame(this.playerProfile).then((gameID) => {
            this.router.navigate(['/play', gameID, 'setup']);
        });
    }

    public signIn() {
        this.playerService.signIn().then((success) => {
            if (success) {
                this.getUser();
            }
        });
    }
}
