import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
	{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule ) },
	{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
	{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
	{ path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
	{ path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) },
	{ path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
	{ path: 'help', loadChildren: () => import('./help/help.module').then(m => m.HelpModule) },
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule {}