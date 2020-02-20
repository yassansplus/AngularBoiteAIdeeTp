import {Component, Input, OnInit} from '@angular/core';
import {IdeaBoxService} from '../services/idea-box.service';
import {Idea} from '../model/idea.model';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  @Input() ideaLike: number;
  private like = 0;
  private dislike = 0;
  private idea: Idea;

  constructor(private ideaBoxService: IdeaBoxService, private authService: AuthService) {

  }

  ngOnInit() {
    this.idea = this.ideaBoxService.getidea(this.ideaLike);
    console.log(this.idea);
  }

  addLike() {
    if (this.authService.user.ideaLiked.indexOf(this.ideaLike) !== -1) {
      return;
    } else {
      this.authService.user.ideaLiked.push(this.ideaLike);

      return this.idea.like++;

    }
  }

  addDislike() {
    if (this.authService.user.ideaLiked.indexOf(this.ideaLike) !== -1) {
      return;
    } else {
      this.authService.user.ideaLiked.push(this.ideaLike);

      return this.idea.dislike++;

    }  }
}
