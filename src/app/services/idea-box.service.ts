import { Injectable } from '@angular/core';
import {Idea} from '../model/idea.model';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class IdeaBoxService {
  private ideas: Array<Idea> = [];
  private  idea: Idea;
  constructor(private httpClient: HttpClient) { }

  addIdea(ideaForm) {
    this.idea = new Idea(ideaForm);
    this.ideas.push(this.idea);
  }

  getidea(key) {
    return this.ideas[key];
  }


  getIdeas() {
    return this.ideas;
  }
  getIdeasFromServer() {
    return this.httpClient
      .get<any[]>('http://192.168.56.1:4000/api')
      .pipe(
        tap(res => {
          this.ideas = res;

        }));
  }

}
