import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { ProductDetailsComponent } from './modules/shop/product-details/product-details.component';
import { ShopComponent } from './modules/shop/shop.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"shop",component:ShopComponent},
  {path:"shop/:id",component:ProductDetailsComponent},
  {path:"**",redirectTo:"" ,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
