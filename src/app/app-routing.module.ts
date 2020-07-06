import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { UserCartComponent } from './user-cart/user-cart.component';

const routes: Routes = [
	{ path: '', redirectTo: 'main', pathMatch: 'full' },
	{ path: 'about-us', component: AboutUsComponent },
	{ path: 'main', component: MainPageComponent },
	{ path: 'contacts', component: ContactsComponent },
	{ path: 'categories', component: CategoriesComponent },
	{ path: 'categories/:categoryId/products', component: ProductsComponent },
	{ path: 'productDetails/:productId', component: ProductDetailsComponent },
	{ path: 'delivery-form', component: DeliveryFormComponent },
	{ path: 'currentUser/cart', component: UserCartComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
