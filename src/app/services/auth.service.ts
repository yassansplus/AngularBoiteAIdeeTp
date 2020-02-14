import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuth = false;

  signIn() {
    return new Promise(
      (resolve, reject) => {
            this.isAuth = true;
            resolve(true);
      }
    );
  }

  signOut() {
    return new Promise(
      (resolve, reject) => {
        this.isAuth = false;
        resolve(true);
      }
    );
  }

}
