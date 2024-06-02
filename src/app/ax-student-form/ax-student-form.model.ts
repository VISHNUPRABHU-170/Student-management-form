import { FormControl } from "@angular/forms";

export interface AxStudentDbModel {
    studentID: FormControl<string>;
    studentName: FormControl<string>;
    studentGender: FormControl<string>;
    studentPhoneNumber: FormControl<string>;
}

export interface AxStudentDataModel {
    studentID: string;
    studentName: string;
    studentGender: string;
    studentPhoneNumber: string;
}