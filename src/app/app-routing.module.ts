import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {AuthGuardGuard} from './guard/auth-guard.guard';
import {IdeaComponent} from './idea/idea.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'ideas', canActivate: [AuthGuardGuard], component: IdeaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
