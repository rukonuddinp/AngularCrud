


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopInformationComponentComponent } from './shop-information-component/shop-information-component.component';
import { ProductInformationComponentComponent } from './product-information-component/product-information-component.component';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {shopService} from './service/shopService';
import {productService} from './service/productService';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HeaderComponent} from './header/header.component';

// import { NgbAlertModule, NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


const appRoutes: Routes = [
  {
  path: 'Shop_Information', component: ShopInformationComponentComponent
  },
  {
    path: 'Product_Information', component: ProductInformationComponentComponent


  }

];

@NgModule({
  declarations: [
    AppComponent,
    ProductInformationComponentComponent,
    ShopInformationComponentComponent,
    HeaderComponent,
    
  
  ],
  imports: [ 
    // NgbPaginationModule, NgbAlertModule,
    BrowserModule, FormsModule,HttpClientModule, ReactiveFormsModule,  RouterModule.forRoot(appRoutes)
  ],
  providers: [shopService, productService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
