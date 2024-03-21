import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CarsComponent } from "./cars.component";

@NgModule({
	declarations: [CarsComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{ path: '', component: CarsComponent }
		])
	]
})
export class CarsModule {}