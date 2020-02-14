import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeaComponent } from './idea/idea.component';
import { LikeComponent } from './like/like.component';
import { IdeaFormComponent } from './idea-form/idea-form.component';
import {FormsModule} from '@angular/forms';
import {IdeaBoxService} from './services/idea-box.service';
import { LoginComponent } from './login/login.component';
import {AuthGuardGuard} from './guard/auth-guard.guard';
import { Ng2IziToastModule } from 'ng2-izitoast';


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
    Ng2IziToastModule
  ],
  providers: [
    IdeaBoxService,
    AuthGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
