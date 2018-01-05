import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule, MatCheckboxModule } from '@angular/material';
// import { CollapseModule } from 'ngx-bootstrap';
// import { ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InsertDataComponent } from './insert-data/insert-data.component';
import { DataService } from './dataprovider/DataService';
import { Product, TableDetail, Account, Company } from  './dataprovider/DataProvider';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CategoryComponent,
    ProductDetailComponent,
    HomepageComponent,
    InsertDataComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // CollapseModule.forRoot(), 
    FormsModule,
    // ActivatedRoute,
    RouterModule.forRoot([
    
      {
        path: '',component:HomepageComponent
      },
      {
        path: 'Home',component:HomepageComponent
      },
      {
        path: 'Contact', component: ContactComponent
      },
      {
        path: 'Category', component: CategoryComponent
      },
      {
        path: 'ProductDetail', component: ProductDetailComponent
      },
      {
        path: 'Insert', component: InsertDataComponent
      }
    ]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },
              DataService,
              Product,
              TableDetail,
              Account,
              Company,
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
