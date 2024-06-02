import { AbstractControl } from '@angular/forms';
import { RegexConstants } from '../ax-constants/ax-regex';

export const nameValidator = (control: AbstractControl) => {

  /** Verifies that entered Name matches Name format */
  if (!RegexConstants.NAME.test(control.value)) {
    return { name: true };
  }

  return null;
};
