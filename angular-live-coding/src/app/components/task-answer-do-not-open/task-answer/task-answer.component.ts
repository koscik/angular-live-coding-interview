import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskAnswerComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  form = new FormGroup({
    firstName: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    lastName: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    age: new FormControl<number>(18, { nonNullable: true }),
  });

  @Output() formUpdated = new EventEmitter<UserForm>();

  ngOnInit(): void {
    this.watchForFormChanges();
  }

  watchForFormChanges() {
    this.form.valueChanges
      .pipe(
        tap(value => this.formUpdated.emit(value)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
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
