import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { CoreModule } from './modules/core/core.module';
import { ShopModule } from './modules/shop/shop.module';
import { HomeModule } from './modules/home/home.module';
import { ErrorInterceptor } from './modules/core/interceptors/error-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ShopModule,
    HomeModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
