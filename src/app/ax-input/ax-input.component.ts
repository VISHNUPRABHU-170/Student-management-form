import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { InputModel } from './ax-input.model';
import { FormControl, ValidationErrors } from '@angular/forms';
import { ErrorMessages } from '../ax-custom-validators/ax-validator-message';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ax-input',
  templateUrl: './ax-input.component.html',
  styleUrls: ['./ax-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AxInputComponent implements OnInit, OnDestroy {
  @Input() inputConfig!: InputModel;
  @Input() control!: FormControl;
  private statusChangesSubscription!: Subscription;

  errorMessages: Map<string, string> = ErrorMessages;
  error: string = '' + this.errorMessages.get('required');

  constructor() {}

  /**
   * Life Cycle Hook Subscribe to Form Control for Status Change.
   */
  ngOnInit(): void {
    this.statusChangesSubscription = (
      this.control as FormControl
    ).statusChanges.subscribe({
      next: () => this.setErrorMessage(this.control.errors),
    });
  }

  /**
   * Function to set field error message, if the control has error.
   * @param error 
   */
  setErrorMessage(error: ValidationErrors | null): void {
    if (error) {
      const key = Object.keys(error)[0];
      this.error = '' + this.errorMessages.get(key)?.toString();
    }
  }

  /**
   * Life Cycle Hook method UnSubscribe From Control Status.
   */
  ngOnDestroy(): void {
    this.statusChangesSubscription?.unsubscribe();
  }
}
