import { HttpInterceptorService } from './_helpers/http-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { AdministrationComponent } from './administration/administration.component';
import { ProductAdministrationComponent } from './administration/product-administration/product-administration.component';
import { CategoryAdministrationComponent } from './administration/category-administration/category-administration.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    FooterComponent,
    CategoriesComponent,
    AboutUsComponent,
    ContactsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    DeliveryFormComponent,
    UserCartComponent,
    AdministrationComponent,
    ProductAdministrationComponent,
    CategoryAdministrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
