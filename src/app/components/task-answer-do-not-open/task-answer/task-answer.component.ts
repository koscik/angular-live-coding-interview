import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { MatFormField, MatInput } from '@angular/material/input';
import { tap } from 'rxjs';

@Component({
  selector: 'app-task-answer',
  imports: [MatFormField, MatLabel, MatInput, ReactiveFormsModule, MatButton],
  templateUrl: './task-answer.component.html',
  styleUrl: './task-answer.component.scss',
  standalone: true,
})
export class TaskAnswerComponent implements OnInit {
  @Output() formUpdated = new EventEmitter<any>();

  form = new FormGroup({
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    age: new FormControl<number>(18),
  });

  ngOnInit(): void {
    this.watchForFormChanges();
  }

  watchForFormChanges() {
    this.form.valueChanges.pipe(
      tap(value => this.formUpdated.emit(value))
    ).subscribe();
  }

  public submitForm() {
    this.formUpdated.emit(this.form.value);
  }
}

export interface UserForm {
  firstName?: string;
  lastName?: string;
  age?: number;
}
