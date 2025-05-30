import { Component } from '@angular/core';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { TaskAnswerComponent } from './components/task-answer-do-not-open/task-answer/task-answer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [EditUserComponent, TaskAnswerComponent],
})
export class AppComponent {
  title = 'angular-live-coding';
}
