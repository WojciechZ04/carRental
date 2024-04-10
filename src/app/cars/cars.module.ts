import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CarsComponent } from "./cars.component";

@NgModule({
	declarations: [CarsComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatPaginatorModule,
		RouterModule.forChild([
			{ path: '', component: CarsComponent }
		])
	]
})
export class CarsModule {}