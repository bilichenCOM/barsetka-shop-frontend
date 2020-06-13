import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
	{ path: 'about-us', component: AboutUsComponent },
	{ path: 'main', component: MainPageComponent },
	{ path: '', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
