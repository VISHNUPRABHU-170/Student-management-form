import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxSelectComponent } from './ax-select.component';

describe('AxSelectComponent', () => {
  let component: AxSelectComponent;
  let fixture: ComponentFixture<AxSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
