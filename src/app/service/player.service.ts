///<reference path="../../../node_modules/@types/gapi.auth2/index.d.ts"/>
import { Injectable } from '@angular/core';
import gapi_auth2 = gapi;
import GoogleUser = gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;
import BasicProfile = gapi.auth2.BasicProfile;

@Injectable()
export class PlayerService {
    // public playerProfile : BasicProfile;
    private loadedPromise : Promise<boolean>;

    constructor() {
        this.loadedPromise = new Promise((resolve, reject) => {
            gapi.load('auth2', () => {
                gapi.auth2.init({
                    client_id: '244043521193-0eqj994haunsb1a056fkna5ajce9juh1.apps.googleusercontent.com'
                }).then(() => resolve(true), () => reject("gapi.auth2.init error"));
            });
        });

        // this.loadedPromise.then((GoogleAuth) => {
        //     GoogleAuth.isSignedIn.get();
        // });

        this.loadedPromise.catch((error) => {
            console.error(error);
        });
    }

    public isSignedIn() : Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.loadedPromise.then(() => {
                resolve(gapi.auth2.getAuthInstance().isSignedIn.get())
            });
        });
    }

    // TODO: make this observable
    public signIn() : Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.loadedPromise.then(() => {
                gapi.auth2.getAuthInstance().signIn().then(() => {
                    resolve(true);
                }, () => {
                    resolve(false);
                });
            });
        });
    }

    public signOut() : void {
        this.loadedPromise.then(() => {
            gapi.auth2.getAuthInstance().signOut();
        });
    }

    public getUserProfile() : Promise<BasicProfile> {
        return new Promise((resolve, reject) => {
            this.loadedPromise.then(() => {
                // this.playerProfile = GoogleAuth.currentUser.get().getBasicProfile();
                resolve(gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile());
            }).catch(reject);
        });
    }

}
