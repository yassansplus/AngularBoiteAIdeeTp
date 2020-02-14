import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Boite à idees';
  array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  private authStatus: boolean;
  constructor(private authService: AuthService, private router: Router) {
    this.authStatus = false;
  }

  getAuthStatus() {
    return this.authService.isAuth;
  }
  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.router.navigate(['ideas']);
      }
    );
  }
  onSignOut() {
    this.authService.signOut().then(
      () => {
        console.log('logout successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['']);
      }
    );
  }
}
