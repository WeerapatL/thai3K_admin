import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InsertDataComponent } from './insert-data/insert-data.component';
import { DataService} from './dataprovider/DataService';
import { Product, TableDetail, Account, Company } from  './dataprovider/DataProvider';
import { LoginComponent } from './login/login.component';
// import { AngularFireModule } from 'angularfire2';
import { AngularFireModule } from 'angularfire2';
var config = {
  apiKey: "AIzaSyADaxiMvkYrMU4GROEcs2LmSkBb9wouf6U",
  authDomain: "thai3k-webapplication.firebaseapp.com",
  databaseURL: "https://thai3k-webapplication.firebaseio.com",
  projectId: "thai3k-webapplication",
  storageBucket: "thai3k-webapplication.appspot.com",
  messagingSenderId: "399187612331"
}
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CategoryComponent,
    ProductDetailComponent,
    HomepageComponent,
    InsertDataComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // CollapseModule.forRoot(), 
    FormsModule,
    AngularFireModule.initializeApp(config),
    // ActivatedRoute,
    RouterModule.forRoot([
    
      {
        path: '',component:LoginComponent
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
