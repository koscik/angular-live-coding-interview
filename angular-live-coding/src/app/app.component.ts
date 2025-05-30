import { Component } from '@angular/core';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditUserAnswerComponent } from './components/task-answer-do-not-open/edit-user-answer/edit-user-answer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [EditUserComponent, EditUserAnswerComponent],
})
export class AppComponent {
  title = 'angular-live-coding';
}
