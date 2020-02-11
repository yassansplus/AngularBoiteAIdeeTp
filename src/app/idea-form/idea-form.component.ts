import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IdeaBoxService} from '../services/idea-box.service';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {

  constructor(private ideaService: IdeaBoxService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.ideaService.addIdea(form.value.idee);
    form.reset();

  }



}
