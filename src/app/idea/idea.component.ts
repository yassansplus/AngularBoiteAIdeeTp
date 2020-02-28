import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {IdeaBoxService} from '../services/idea-box.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {
  private ideaList
  constructor( private ideaBoxService: IdeaBoxService) {
  }

  ngOnInit() {
     this.ideaBoxService.getIdeasFromServer().subscribe(res => { this.ideaList = res; },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

}
