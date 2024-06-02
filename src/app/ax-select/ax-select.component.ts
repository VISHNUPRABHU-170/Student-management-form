import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SelectModel } from './ax-select.model';
import { FormControl, ValidationErrors } from '@angular/forms';
import { ErrorMessages } from '../ax-custom-validators/ax-validator-message';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ax-select',
  templateUrl: './ax-select.component.html',
  styleUrls: ['./ax-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AxSelectComponent {
  @Input() selectConfig!: SelectModel;
  @Input() control!: FormControl;
  private statusChangesSubscription!: Subscription;

  errorMessages: Map<string, string> = ErrorMessages;
  error: string = '' + this.errorMessages.get('required');

  constructor() {}

  /**
   * Life Cycle Hook Subscribe to Form Control for Form Control Status.
   */
  ngOnInit(): void {
    this.statusChangesSubscription = (
      this.control as FormControl
    ).statusChanges.subscribe({
      next: () => this.setErrorMessage(this.control.errors),
    });
  }

  /**
   * Method Set Error Message when the Status Changed.
   */
  setErrorMessage(error: ValidationErrors | null): void {
    if (error) {
      const key = Object.keys(error)[0];
      this.error = '' + this.errorMessages.get(key)?.toString();
    }
  }

  /**
   * Life Cycle Hook method UnSubscribe Form Control Status.
   */
  ngOnDestroy(): void {
    if (this.statusChangesSubscription) {
      this.statusChangesSubscription.unsubscribe();
    }
  }
}
