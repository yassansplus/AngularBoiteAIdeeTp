import {Injectable} from '@angular/core';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  isAuth = false;
  public user: User;

  signIn(username = 'Yassansplus') {
    return new Promise(
      (resolve, reject) => {
        console.log();
        this.user = {username, ideaLiked: []};
        console.log(this.user);
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
