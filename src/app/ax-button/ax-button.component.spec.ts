import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxButtonComponent } from './ax-button.component';

describe('AxButtonComponent', () => {
  let component: AxButtonComponent;
  let fixture: ComponentFixture<AxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
