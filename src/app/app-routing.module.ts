import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {GameComponent} from "./game/game.component";
import {PlayerResover} from "./service/player.resolver";

const routes: Routes = [
    {
        path: 'play/:id/setup',
        component: GameComponent,
        resolve: {
            player: PlayerResover
        }
    },
    {
        path: 'play/:id',
        component: GameComponent,
        resolve: {
            player: PlayerResover
        }
    },
    {
        path: 'start',
        component: StartComponent
    },
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
