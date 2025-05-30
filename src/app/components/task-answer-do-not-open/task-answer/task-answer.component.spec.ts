import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAnswerComponent } from './task-answer.component';

describe('CodeReviewMeComponent', () => {
  let component: TaskAnswerComponent;
  let fixture: ComponentFixture<TaskAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskAnswerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
