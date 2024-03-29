import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarSelectionComponent } from './car-selection/car-selection.component';
import { ExtrasComponent } from './extras/extras.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking.component';
import { BookingRoutingModule } from './booking-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    BookingComponent,
    CarSelectionComponent,
    ExtrasComponent,
    ContactDetailsComponent,
    PaymentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BookingRoutingModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    JsonPipe,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [provideNativeDateAdapter()],
})
export class BookingModule {}
