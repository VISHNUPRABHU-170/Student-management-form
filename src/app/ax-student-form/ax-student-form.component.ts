import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AxStudentDataModel, AxStudentDbModel } from './ax-student-form.model';
import { FirebaseService } from '../ax-services/ax-firebase.service';
import {
  submitButtonConfig,
  cancelButtonConfig,
  popupConfig,
  studentIdInputConfig,
  studentNameInputConfig,
  studentPhoneNumberInputConfig,
  genderSelectConfig,
} from './ax-student-form.config';
import { idValidator } from '../ax-custom-validators/ax-id-validator';
import { nameValidator } from '../ax-custom-validators/ax-name-validator';
import { phoneNumberValidator } from '../ax-custom-validators/ax-phone-number-validator';
import { AxSnackbarComponent } from '../ax-snackbar/ax-snackbar';
import { ButtonModel } from '../ax-button/ax-button.model';
import { PopupModel } from '../ax-popup/ax-popup.model';
import { InputModel } from '../ax-input/ax-input.model';
import { SelectModel } from '../ax-select/ax-select.model';

@Component({
  selector: 'ax-student-form',
  templateUrl: './ax-student-form.component.html',
  styleUrls: ['./ax-student-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AxFormStudentDbComponent implements OnInit {
  formGroup: FormGroup<AxStudentDbModel>;
  data!: AxStudentDataModel;
  submitButtonConfig: ButtonModel = submitButtonConfig;
  cancelButtonConfig: ButtonModel = cancelButtonConfig;
  popupConfig: PopupModel = popupConfig;
  studentIdInputConfig: InputModel = studentIdInputConfig;
  studentNameInputConfig: InputModel = studentNameInputConfig;
  studentPhoneNumberInputConfig: InputModel = studentPhoneNumberInputConfig;
  genderSelectConfig: SelectModel = genderSelectConfig;
  alertMessage: boolean = false;

  @ViewChild(AxSnackbarComponent) snackBar!: AxSnackbarComponent;

  constructor(private service: FirebaseService) {
    this.formGroup = new FormGroup({
      studentID: new FormControl('', [Validators.required]),
      studentName: new FormControl('', [
        Validators.required,
        nameValidator,
      ]),
      studentGender: new FormControl('', Validators.required),
      studentPhoneNumber: new FormControl('', [Validators.required, phoneNumberValidator]),
    }) as FormGroup<AxStudentDbModel>;
  }

  ngOnInit(): void {
    this.addIdValidator();
  }

  /**
   * Method Calls Firebase Servive to Create Student Data, if the form inputs are valid else it display popup message.
   */
  onSubmit(): void {
    if (this.formGroup.valid) {
      this.data = this.formGroup.value as AxStudentDataModel;
      this.service.createDataInFirebase(this.data);
      this.formGroup.reset();
      this.snackBar.openSnackBar("Created Successfully", "Close");
    } else {
      this.alertMessage = true;
    }
  }

  /**
   * Method Reset Form Fields.
   */
  onCancel(): void {
    this.formGroup.reset();
    this.formGroup.markAsUntouched();
  }

  /**
   * Method adds Custom Validator for Student Id.
   */
  addIdValidator() {
    new Promise((resolve, reject) => {
      this.service.getDataFromFirebase();
      resolve('');
    })
      .then(() => {
        this.formGroup.controls['studentID'].addValidators(
          idValidator()
        );
      })
      .catch(() => {
        console.log('error');
      });
  }

  /**
   * Method Removes Popup Message.
   */
  removePopup(): void {
    this.alertMessage = false;
  }

}
