import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AxFormStudentDbComponent } from './ax-student-form/ax-student-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseService } from './ax-services/ax-firebase.service';
import { AxStudentDataComponent } from './ax-student-data/ax-student-data.component';
import { AxButtonComponent } from './ax-button/ax-button.component';
import { AxInputComponent } from './ax-input/ax-input.component';
import { AxSelectComponent } from './ax-select/ax-select.component';
import { AxPopupComponent } from './ax-popup/ax-popup.component';
import { AxSnackbarComponent } from './ax-snackbar/ax-snackbar';

@NgModule({
  declarations: [
    AppComponent,
    AxFormStudentDbComponent,
    AxStudentDataComponent,
    AxButtonComponent,
    AxInputComponent,
    AxSelectComponent,
    AxPopupComponent,
    AxSnackbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
  ],
  providers: [FirebaseService, MatSnackBar],
  bootstrap: [AppComponent],
})
export class AppModule {}
