import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { TestErrorComponent } from './test-error/test-error.component';
import { ToastrModule } from 'ngx-toastr';
import {BreadcrumbModule} from 'xng-breadcrumb';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { SectionHeaderComponent } from './section-header/section-header.component';


@NgModule({
  declarations: [
    NavBarComponent,
    NotFoundComponent,
    ServerErrorComponent,
    TestErrorComponent,
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    ToastrModule.forRoot({
      positionClass:'toastr-bottom-right',
      preventDuplicates:true
    }),
    BrowserAnimationsModule
  ],
  exports:[NavBarComponent,SectionHeaderComponent] //! bunu açmazsan AppModule yayınlayamazsın
  ,schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { } //TODO:Burayı beklet 

