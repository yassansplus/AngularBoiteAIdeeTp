import {Component, Input, OnInit} from '@angular/core';
import {IdeaBoxService} from '../services/idea-box.service';
import {Idea} from '../model/idea.model';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  @Input() ideaLike: number;
  private like = 0;
  private dislike = 0;
  private idea: Idea ;
  constructor(private ideaBoxService: IdeaBoxService) {

  }

  ngOnInit() {
    this.idea =   this.ideaBoxService.getidea(this.ideaLike);
    console.log(this.idea);
  }
  addLike() {
    return this.idea.like++;
  }
  addDislike() {
    return this.idea.dislike++;
  }
}
