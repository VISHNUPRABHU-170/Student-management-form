import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxPopupComponent } from './ax-popup.component';

describe('AxPopupComponent', () => {
  let component: AxPopupComponent;
  let fixture: ComponentFixture<AxPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
