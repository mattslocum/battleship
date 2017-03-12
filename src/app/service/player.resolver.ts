import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import BasicProfile = gapi.auth2.BasicProfile;
import {PlayerService} from "./player.service";


@Injectable()
export class PlayerResover implements Resolve<BasicProfile> {
    constructor(
        private router : Router,
        private playerService : PlayerService
    ) {}


    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<BasicProfile> {
        return this.playerService.getUserProfile()
            .then(BasicProfile => {
                if (BasicProfile) {
                    return BasicProfile;
                } else {
                    this.router.navigate(['/start']);
                    return null;
                }
            });
    }

}
