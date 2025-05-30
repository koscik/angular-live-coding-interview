import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditUserAnswerComponent } from './components/task-answer-do-not-open/edit-user-answer/edit-user-answer.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EditUserComponent, EditUserAnswerComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
