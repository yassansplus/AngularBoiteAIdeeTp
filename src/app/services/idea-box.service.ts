import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdeaBoxService {
  private ideas: Array<string> = [];
  constructor() { }

  addIdea(idea) {
    this.ideas.push(idea);
  }


  getIdeas() {
    return this.ideas;
  }

}
