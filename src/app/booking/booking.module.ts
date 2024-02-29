import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarSelectionComponent } from './car-selection/car-selection.component';
import { ExtrasComponent } from './extras/extras.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';

@NgModule({
  declarations: [BookingComponent, CarSelectionComponent, ExtrasComponent, ContactDetailsComponent, PaymentComponent],
  imports: [CommonModule, RouterModule, BookingRoutingModule],
})
export class BookingModule {}
