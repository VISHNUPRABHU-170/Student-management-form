import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  TableConfig,
  submitButtonConfig,
  cancelButtonConfig,
  deleteButtonConfig,
  editButtonConfig,
  studentIdInputConfig,
  studentNameInputConfig,
  studentPhoneNumberInputConfig,
  studentGenderInputConfig,
  genderSelectConfig,
  popupConfig
} from './ax-student-data.config';
import { AxTableModel } from './ax-student-data.model';
import { FirebaseService } from '../ax-services/ax-firebase.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AxStudentDataModel,
  AxStudentDbModel,
} from '../ax-student-form/ax-student-form.model';
import { idValidator } from '../ax-custom-validators/ax-id-validator';
import { nameValidator } from '../ax-custom-validators/ax-name-validator';
import { phoneNumberValidator } from '../ax-custom-validators/ax-phone-number-validator';
import {
  MatPaginator,
} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AxSnackbarComponent } from '../ax-snackbar/ax-snackbar';
import { ButtonModel } from '../ax-button/ax-button.model';
import { PopupModel } from '../ax-popup/ax-popup.model';
import { InputModel } from '../ax-input/ax-input.model';
import { SelectModel } from '../ax-select/ax-select.model';

@Component({
  selector: 'ax-student-data',
  templateUrl: './ax-student-data.component.html',
  styleUrls: ['./ax-student-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AxStudentDataComponent implements OnInit, OnDestroy {
  dataSource: AxTableModel[] = [];
  dataTable = new MatTableDataSource<AxTableModel>();
  displayedColumns: string[] = TableConfig;
  fireBaseData!: object;
  formGroup: FormGroup<AxStudentDbModel>[] = [];
  submitButtonConfig: ButtonModel = submitButtonConfig;
  cancelButtonConfig: ButtonModel = cancelButtonConfig;
  deleteButtonConfig: ButtonModel = deleteButtonConfig;
  editButtonConfig: ButtonModel = editButtonConfig;
  popupConfig: PopupModel = popupConfig;
  studentIdInputConfig: InputModel = studentIdInputConfig;
  studentNameInputConfig: InputModel = studentNameInputConfig;
  studentPhoneNumberInputConfig: InputModel = studentPhoneNumberInputConfig;
  studentGenderInputConfig: InputModel = studentGenderInputConfig;
  genderSelectConfig: SelectModel = genderSelectConfig;
  alertMessage: boolean = false;
  progressDisplay: boolean = false;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(AxSnackbarComponent) snackBar!: AxSnackbarComponent; 

  constructor(private service: FirebaseService) { 
    if(!this.dataSource.length) {
      this.displayProgress(true);
    }
  }

  /**
   * Subscribes to Firebase Servive Dependency.
   */
  ngOnInit(): void {
    this.service.dataEmitter.subscribe({
      next: (val) => {
        this.addFormControls(val);
        this.tableSort();
        this.tablePaginator();
        this.dataTable.data = this.dataSource;
      },
    });
  }

  /**
   * Method Initialize Data Source and Add Form Controls for Student Data.
   */
  addFormControls(val: any) {
    this.fireBaseData = val;
    const temp: AxTableModel[] = Object.values(val);
    this.formGroup = [];
    this.dataSource = temp.map((item) => {
      this.formGroup.push(
        new FormGroup({
          studentID: new FormControl(item.studentID, [
            Validators.required,
            idValidator(item.studentID),
          ]),
          studentName: new FormControl(item.studentName, [
            Validators.required,
            nameValidator,
          ]),
          studentGender: new FormControl(
            item.studentGender,
            Validators.required
          ),
          studentPhoneNumber: new FormControl(item.studentPhoneNumber, [
            Validators.required,
            phoneNumberValidator,
          ]),
        }) as FormGroup<AxStudentDbModel>
      );
      item.edit = false;
      return item;
    });
    if(this.dataSource.length && this.progressDisplay === true) {
      setTimeout(() => {this.displayProgress(false);}, 2000);
    }
  }

  /**
   * Method Toogle Progress Bar.
   */
  displayProgress(data: boolean) {
    this.progressDisplay = data;
    this.tableSort();
    this.tablePaginator();
  }

  /**
   * Method enable Student Data for Updates.
   */
  onEdit(id: string): void {
    const index = this.indexFinder(id);
    this.dataSource[index].edit = true;
  }

  /**
   * Method Call firebase Service dependency to Update Student data.
   */
  onSubmit(id: string): void {
    const index = this.indexFinder(id);
    if(this.formGroup[index].pristine) {
      this.snackBar.openSnackBar("No Changes Found", "Close").onAction().subscribe({
        next: () => {this.dataSource[index].edit = false;}
      });
    }
    else if (this.formGroup[index].valid) {
      this.dataSource[index].edit = true;
      const firebaseIDs = Object.keys(this.fireBaseData);
      this.service.updateDataInFirebase(
        firebaseIDs[index],
        this.formGroup[index].value as AxStudentDataModel
      );
      this.snackBar.openSnackBar("Updated Successfully", "Close");
    } else {
      this.snackBar.openSnackBar("Invalid Form Data", "Close");
    }
  }

  /**
   * Method disable Student data from editable.
   */
  onCancel(id: string): void {
    const index = this.indexFinder(id);
    this.dataSource[index].edit = false;
  }

  /**
   * Method Call firebase Service dependency to Delete Student data.
   */
  onDelete(id: string): void {
    const index = this.indexFinder(id);
    const firebaseIDs = Object.keys(this.fireBaseData);
    this.service.deleteDataInFirebse(firebaseIDs[index]);
    this.snackBar.openSnackBar("Deleted Successfully", "Close");
  }

  /**
   * Method Adds Paginator for Table.
   */
  tablePaginator() {
    this.dataTable.paginator = this.paginator;
  }

  /**
   * Method Sort Table Data by Student Id.
   */
  tableSort() {
    this.dataTable.sort = this.sort;
  }

  /**
   * Method find index of Student Data using Student ID.
   */
  indexFinder(id: string): number {
    const data = this.dataSource;
    return data.findIndex((val) => val.studentID === id);
  }

  /**
   * Method removes Popup Message.
   */
  removePopup() {
    this.alertMessage = false;
  }


  /**
   * Method UnSubscribes Firebase Servive Dependency.
   */
  ngOnDestroy(): void {
    this.service.dataEmitter?.unsubscribe();
  }
}
