import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './Product/products/products.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { HomeComponent } from './home/home.component';
import { ShowDetailsComponent } from './Product/show-details/show-details.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { EditProductComponent } from './Product/edit-product/edit-product.component';
import { WishlistComponent } from './Product/wishlist/wishlist.component';
import { CategoryComponent } from './categories/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SignupComponent,
    LoginComponent,
    ProductsComponent,
    ItemDetailsComponent,
    OrderPageComponent,
    HomeComponent,
    ShowDetailsComponent,
    AddProductComponent,
    EditProductComponent,
    WishlistComponent,
    CategoryComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
