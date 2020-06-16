import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
	{ path: '', redirectTo: 'main', pathMatch: 'full' },
	{ path: 'about-us', component: AboutUsComponent },
	{ path: 'main', component: MainPageComponent },
	{ path: 'contacts', component: ContactsComponent },
	{ path: 'categories', component: CategoriesComponent },
	{ path: 'categories/:categoryId/products', component: ProductsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
