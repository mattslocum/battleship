import { Component } from '@angular/core';
import {PlayerService} from "./service/player.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public isSignedIn : boolean;
    public checkingLogin : boolean;

    constructor(
        private playerService : PlayerService
    ) {}

    ngOnInit() {
        this.isSignedIn = false;
        this.checkingLogin = true;

        this.playerService.isSignedIn().then((isSignedIn) => {
            this.isSignedIn = isSignedIn;
            this.checkingLogin = false;
        });
    }

    public signOut() {
        this.playerService.signOut();

    }

    public signIn() {

    }
}
