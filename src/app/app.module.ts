import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeaComponent } from './idea/idea.component';
import { LikeComponent } from './like/like.component';
import { IdeaFormComponent } from './idea-form/idea-form.component';
import {FormsModule} from '@angular/forms';
import {IdeaBoxService} from './services/idea-box.service';

@NgModule({
  declarations: [
    AppComponent,
    IdeaComponent,
    LikeComponent,
    IdeaFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    IdeaBoxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
