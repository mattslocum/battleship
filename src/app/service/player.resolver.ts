import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import BasicProfile = gapi.auth2.BasicProfile;
import {PlayerService} from "./player.service";


@Injectable()
export class PlayerResover implements Resolve<BasicProfile> {
    constructor(
        private playerService : PlayerService
        // private cs: CrisisService,
        // private router: Router
    ) {}


    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<BasicProfile> {
        let id = route.params['id'];
        return this.playerService.getUserProfile();
        // .then(BasicProfile => {
        //     if (BasicProfile) {
        //         return BasicProfile;
        //     } else {
        //         this.router.navigate(['/start']);
        //         return null;
        //     }
        // });
    }

}
