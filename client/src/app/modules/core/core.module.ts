import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    CoreComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavBarComponent] //! bunu açmazsan AppModule yayınlayamazsın
})
export class CoreModule { } //TODO:Burayı beklet 

