import { AbstractControl } from '@angular/forms';
import { RegexConstants } from '../ax-constants/ax-regex';

export const phoneNumberValidator = (control: AbstractControl) => {

    /** Verifies that entered Phone Number matches Phone Number format */
    if (RegexConstants.PHONE_NUMBER.test(control.value)) {
        return null;
    }
    return { phoneNumber: true }
};
