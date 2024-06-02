import { InputModel } from '../ax-input/ax-input.model';
import { PopupModel } from '../ax-popup/ax-popup.model';
import { SelectModel } from '../ax-select/ax-select.model';
import { AxButtonType, ButtonModel } from './../ax-button/ax-button.model';
export const TableConfig = [
  'studentID',
  'studentName',
  'studentGender',
  'studentPhoneNumber',
  'actionButtons',
];

/** Button Configs */
export const editButtonConfig: ButtonModel = {
  text: 'Edit',
  type: 'button',
  buttonType: AxButtonType.RAISED
};

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

export const deleteButtonConfig: ButtonModel = {
  text: 'Delete',
  type: 'button',
  buttonType: AxButtonType.RAISED
};

/** Input Configs */
export const studentIdInputConfig: InputModel = {
  type: 'text',
};

export const studentNameInputConfig: InputModel = {
  type: 'text',
};

export const studentPhoneNumberInputConfig: InputModel = {
  type: 'text',
};

export const studentGenderInputConfig: InputModel = {
  type: 'text',
};

/** Select Configs */
export const genderSelectConfig: SelectModel = {
  values: ['Male', 'Female'],
  options: ['Male', 'Female'],
};

export const popupConfig: PopupModel = {
  title: "Invalid Form Data",
  message: "Your form contains invalid data. Please review and correct it.",
  buttonConfig: {
    text: "Close",
    type: "button",
    buttonType: AxButtonType.RAISED
  }
}
