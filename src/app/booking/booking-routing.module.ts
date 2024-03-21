import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BookingComponent } from "./booking.component";
import { CarSelectionComponent } from "./car-selection/car-selection.component";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { ExtrasComponent } from "./extras/extras.component";
import { PaymentComponent } from "./payment/payment.component";
import { canDeactivateGuard } from "../guards/can-deactivate.guard";
import { BookingGuard } from "./booking.guard";

const routes: Routes = [
  {
	path: "",
	component: BookingComponent,
	canDeactivate: [canDeactivateGuard],
	children: [
	  { path: "car-selection", component: CarSelectionComponent, canActivate: [BookingGuard] },
	  { path: "extras", component: ExtrasComponent, canActivate: [BookingGuard] },
	  { path: "contact-details", component: ContactDetailsComponent, canActivate: [BookingGuard] },
	  { path: "payment", component: PaymentComponent, canActivate: [BookingGuard] },
	  { path: "", redirectTo: "car-selection", pathMatch: "full" },
	],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}