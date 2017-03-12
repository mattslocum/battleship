import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {GameService} from "./game.service";
import {Game} from "../objects/Game";


@Injectable()
export class GameResover implements Resolve<Game> {
    constructor(
        private router : Router,
        private gameService : GameService
    ) {}


    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<Game> {
        let id = route.params['id'];
        return this.gameService.fetchGame(id)
            .then(Game => {
                if (Game) {
                    return Game;
                } else {
                    this.router.navigate(['/start']);
                    return null;
                }
            });
    }

}
