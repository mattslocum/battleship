import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { GameGridComponent } from './game-grid/game-grid.component';
import { GameControlsComponent } from './game-controls/game-controls.component';
import { GridShipComponent } from './grid-ship/grid-ship.component';
import {GameService} from "./service/game.service";
import {PlayerService} from "./service/player.service";
import {PlayerResover} from "./service/player.resolver";
import {AngularFireModule, FirebaseAppConfig, AuthProviders, AuthMethods} from "angularfire2";
import {GameResover} from "./service/game.resolver";
import { GridCellComponent } from './grid-cell/grid-cell.component';
import {ShotService} from "./service/shot.service";

const firebaseConfig : FirebaseAppConfig = {
    apiKey: "AIzaSyBPz8WD91uJ5IX_qQdKASFQdaA2iuonzHo",
    authDomain: "battleship-161001.firebaseapp.com",
    databaseURL: "https://battleship-161001.firebaseio.com",
    storageBucket: "battleship-161001.appspot.com",
    messagingSenderId: "244043521193"
};

const myFirebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
};

@NgModule({
    declarations: [
        AppComponent,
        StartComponent,
        GameComponent,
        GameGridComponent,
        GameControlsComponent,
        GridShipComponent,
        GridCellComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig, "battleship")
  ],
  providers: [
      GameService,
      GameResover,
      PlayerService,
      PlayerResover,
      ShotService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
