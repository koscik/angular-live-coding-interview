import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [EditUserComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-live-coding';
}
