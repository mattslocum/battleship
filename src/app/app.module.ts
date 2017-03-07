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

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent,
    GameGridComponent,
    GameControlsComponent,
    GridShipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
      GameService,
      PlayerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
