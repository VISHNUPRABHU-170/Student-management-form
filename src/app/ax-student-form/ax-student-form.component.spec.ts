import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxFormStudentDbComponent } from './ax-student-form.component';

describe('AxFormStudentDbComponent', () => {
  let component: AxFormStudentDbComponent;
  let fixture: ComponentFixture<AxFormStudentDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxFormStudentDbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxFormStudentDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
