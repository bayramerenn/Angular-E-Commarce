import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/core/not-found/not-found.component';
import { ServerErrorComponent } from './modules/core/server-error/server-error.component';
import { TestErrorComponent } from './modules/core/test-error/test-error.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ProductDetailsComponent } from './modules/shop/product-details/product-details.component';
import { ShopComponent } from './modules/shop/shop.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent, data: {
      breadcrumb: {
        label: 'Home',
        info: { myData: { icon: 'home', iconType: 'material' } }
      }
    }
  },
  { path: "shop", component: ShopComponent, data: { breadcrumb: "/Shop" } },
  { path: "shop/:id", component: ProductDetailsComponent, data: { breadcrumb: { alias: "shopDetail" } } },
  { path: "test-error", component: TestErrorComponent, data: { breadcrumb: "Test Errors" } },
  { path: "server-error", component: ServerErrorComponent, data: { breadcrumb: "Server Errors" } },
  { path: "not-found", component: NotFoundComponent, data: { breadcrumb: "Not Found" } },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
