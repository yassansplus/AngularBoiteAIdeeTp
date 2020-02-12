import { Injectable } from '@angular/core';
import {Idea} from '../model/idea.model';


@Injectable({
  providedIn: 'root'
})
export class IdeaBoxService {
  private ideas: Array<Idea> = [];
  private  idea: Idea;
  constructor() { }

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

}
