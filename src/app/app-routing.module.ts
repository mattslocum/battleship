import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {GameComponent} from "./game/game.component";
import {PlayerResover} from "./service/player.resolver";
import {GameResover} from "./service/game.resolver";

const routes: Routes = [
    {
        path: 'play/:id/setup',
        component: GameComponent,
        resolve: {
            profile: PlayerResover,
            game: GameResover
        }
    },
    {
        path: 'play/:id',
        component: GameComponent,
        resolve: {
            profile: PlayerResover,
            game: GameResover
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
