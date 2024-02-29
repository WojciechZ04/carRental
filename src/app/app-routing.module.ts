import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
	{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule ) },
	{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
	{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
	{ path: 'booking', loadChildren: () => import('./book/book.module').then(m => m.BookModule) },
	{ path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) },
	// { path: 'help', loadChildren: () => import('./help/help.module').then(m => m.CarsModule) },
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule {}