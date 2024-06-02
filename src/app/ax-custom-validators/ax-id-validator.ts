import { AbstractControl, ValidatorFn } from '@angular/forms';
import { FirebaseService } from '../ax-services/ax-firebase.service';
import { AxStudentDataModel } from '../ax-student-form/ax-student-form.model';
import { RegexConstants } from '../ax-constants/ax-regex';

export const idValidator = (id?: string): ValidatorFn => {
  return (control: AbstractControl) => {

    /** Checks for New User Id and Current User Id are Same */
    if (id && id.toLowerCase() === control.value.toLowerCase()) {
      return null;
    }

    /** Verifies that entered Id matches ID format */
    else if (!RegexConstants.ID.test(control.value)) {
      return { idPattern: true };
    } 

    /** Checks for entered Id already exist or not */
    else if (isStudentIdExist(control.value)) {
      return { id: true };
    }

    /** Returns entered Id is valid */
    return null;
  };
};

/**
 * Function Checks for Id Already Exist or Not in Database
 */

function isStudentIdExist(id: string): boolean {
  const data: AxStudentDataModel[] = Object.values(
    FirebaseService.fireBaseData
  );
  for (let val of data) {
    if (val.studentID.toLowerCase() === id.toLowerCase()) {
      return true;
    }
  }
  return false;
}
