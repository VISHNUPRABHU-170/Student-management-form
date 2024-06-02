import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxStudentDataComponent } from './ax-student-data.component';

describe('AxStudentDataComponent', () => {
  let component: AxStudentDataComponent;
  let fixture: ComponentFixture<AxStudentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxStudentDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxStudentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
