import { AxButtonType, ButtonModel } from '../ax-button/ax-button.model';
import { InputModel } from '../ax-input/ax-input.model';
import { PopupModel } from '../ax-popup/ax-popup.model';
import { SelectModel } from '../ax-select/ax-select.model';

/** Button Config */
export const submitButtonConfig: ButtonModel = {
  text: 'Submit',
  type: 'button',
  buttonType: AxButtonType.RAISED
};

export const cancelButtonConfig: ButtonModel = {
  text: 'Cancel',
  type: 'button',
  buttonType: AxButtonType.RAISED
};

/** Input Config */
export const studentIdInputConfig: InputModel = {
  label: 'Student ID',
  type: 'text',
};

export const studentNameInputConfig: InputModel = {
  label: 'Student Name',
  type: 'text',
};

export const studentPhoneNumberInputConfig: InputModel = {
  label: 'Phone Number',
  type: 'text',
};

/** Select Config */
export const genderSelectConfig: SelectModel = {
  label: 'Gender',
  values: ['Male', 'Female'],
  options: ['Male', 'Female'],
};

/** Popup Config */
export const popupConfig: PopupModel = {
  title: 'Invalid Form Data',
  message: 'Your form contains invalid data. Please review and correct it.',
  buttonConfig: {
    text: 'Close',
    type: 'button',
    buttonType: AxButtonType.RAISED
  },
};
