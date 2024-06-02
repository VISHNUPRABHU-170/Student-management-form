import { Component, ViewEncapsulation } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'ax-snackbar',
  template: '',
  styles: [
    `
      .mat-mdc-snack-bar-container .mdc-snackbar__surface {
        min-width: 100px !important;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None
})
export class AxSnackbarComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, buttonText: string) {
    return this.snackBar.open(message, buttonText, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
