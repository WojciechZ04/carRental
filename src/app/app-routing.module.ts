import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
	{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule )},
	{ path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) }
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}