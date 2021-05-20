import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './Product/products/products.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { EditProductComponent } from './Product/edit-product/edit-product.component';
import { WishlistComponent } from './Product/wishlist/wishlist.component';
import { ShowDetailsComponent} from './Product/show-details/show-details.component';
import { CategoryComponent} from './categories/category/category.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'product', component: ProductsComponent},
//   {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'addproduct', component: AddProductComponent},
  {path: 'editproduct', component: EditProductComponent},
  {path: 'showdetails', component: ShowDetailsComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'category', component: CategoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }