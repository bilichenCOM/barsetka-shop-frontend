import { GeolocationInterceptorComponent } from './geolocation-interceptor/geolocation-interceptor.component';
import { ProductDetailsAdministrationComponent } from './product-details-administration/product-details-administration.component';
import { ProductsAdministrationComponent } from './products-administration/products-administration.component';
import { CategoryDetailsAdministrationComponent } from './category-details-administration/category-details-administration.component';
import { CategoriesAdministrationComponent } from './categories-administration/categories-administration.component';
import { AuthGuard } from './_helpers/authgard';
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
import { AdministrationComponent } from './administration/administration.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: GeolocationInterceptorComponent },
	{ path: 'about-us', component: AboutUsComponent },
	{ path: 'main', component: MainPageComponent },
	{ path: 'contacts', component: ContactsComponent },
	{ path: 'categories', component: CategoriesComponent },
	{ path: 'categories/:categoryId/products', component: ProductsComponent },
	{ path: 'productDetails/:productId', component: ProductDetailsComponent },
	{ path: 'delivery-form', component: DeliveryFormComponent },
	{ path: 'currentUser/cart', component: UserCartComponent },
	{ path: 'administration', component: AdministrationComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'administration/categories', component: CategoriesAdministrationComponent },
  { path: 'administration/categories/:categoryId', component: CategoryDetailsAdministrationComponent },
  { path: 'administration/products', component: ProductsAdministrationComponent },
  { path: 'administration/products/:productId', component: ProductDetailsAdministrationComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
