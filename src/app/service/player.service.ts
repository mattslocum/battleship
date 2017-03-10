///<reference path="../../../node_modules/@types/gapi.auth2/index.d.ts"/>
import { Injectable } from '@angular/core';
import gapi_auth2 = gapi;
import GoogleUser = gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;
import {Promise} from "es6-promise";
import BasicProfile = gapi.auth2.BasicProfile;

@Injectable()
export class PlayerService {
    public playerName : string = "Matt";
    private loadedPromise : Promise<GoogleAuth>;

    constructor() {
        this.loadedPromise = new Promise((resolve, reject) => {
            gapi.load('auth2', () => {
                gapi.auth2.init({
                    client_id: '244043521193-0eqj994haunsb1a056fkna5ajce9juh1.apps.googleusercontent.com'
                }).then(resolve, reject);
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
            this.loadedPromise.then((GoogleAuth) => {
                resolve(GoogleAuth.isSignedIn.get())
            });
        });
    }

    // TODO: make this observable
    public signIn() : Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.loadedPromise.then((GoogleAuth) => {
                GoogleAuth.signIn().then(() => {
                    resolve(true);
                }, () => {
                    resolve(false);
                });
            });
        });
    }

    public signOut() : void {
        this.loadedPromise.then((GoogleAuth) => {
            GoogleAuth.signOut();
        });
    }

    public getUserProfile() : Promise<BasicProfile> {
        return new Promise((resolve, reject) => {
            this.loadedPromise.then((GoogleAuth) => {
                resolve(GoogleAuth.currentUser.get().getBasicProfile());
            }).catch(reject);
        });
    }

}
