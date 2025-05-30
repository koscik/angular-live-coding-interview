import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserAnswerComponent } from './edit-user-answer.component';

describe('CodeReviewMeComponent', () => {
  let component: EditUserAnswerComponent;
  let fixture: ComponentFixture<EditUserAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUserAnswerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditUserAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
