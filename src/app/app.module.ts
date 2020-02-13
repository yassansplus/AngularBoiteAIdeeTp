import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeaComponent } from './idea/idea.component';
import { LikeComponent } from './like/like.component';
import { IdeaFormComponent } from './idea-form/idea-form.component';
import {FormsModule} from '@angular/forms';
import {IdeaBoxService} from './services/idea-box.service';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AuthGuardGuard} from './guard/auth-guard.guard';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'ideas', canActivate: [AuthGuardGuard], component: IdeaComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    IdeaComponent,
    LikeComponent,
    IdeaFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    IdeaBoxService,
    AuthGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
