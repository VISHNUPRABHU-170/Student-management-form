import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AxInputComponent } from './ax-input.component';

describe('AxInputComponent', () => {
  let component: AxInputComponent;
  let fixture: ComponentFixture<AxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
