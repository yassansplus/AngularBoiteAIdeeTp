import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {Ng2IzitoastService} from 'ng2-izitoast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, public iziToast: Ng2IzitoastService) { }

  ngOnInit() {
  }
  onSubmit(form) {
    if (form.value.pseudo === "Radouane" && form.value.password === "123456789") {
      console.log('Vous voila connecté')
      this.authService.signIn(form.value.pseudo);

      this.router.navigate(['ideas']);
    }
    else {
      this.iziToast.error({
        title: 'Error',
        message: 'Illegal operation',
      });
    }
    console.log(form.value);
  }
}
