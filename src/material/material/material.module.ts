import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

const angularMateial = [
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatDatepickerModule,
  MatStepperModule,
  MatDialogModule,
  MatDividerModule,
  MatSelectModule,
];
import { MaterialRoutingModule } from './material-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatNativeDateModule,
    angularMateial,
  ],
  exports: [angularMateial],
})
export class MaterialModule {}
