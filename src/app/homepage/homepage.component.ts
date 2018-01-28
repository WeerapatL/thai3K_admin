import { Product } from './../dataprovider/DataProvider';
import { DataService } from './../dataprovider/DataService';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CategoryComponent } from '../category/category.component';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../../vendor/bootstrap/css/bootstrap.min.css', '../../css/modern-business.css']
})
export class HomepageComponent implements OnInit {
  allProduct: Product[] = [];
  state = null;

  constructor(
    private route: Router,
    public service: DataService) {

    this.state = localStorage.getItem("firebase:authUser:AIzaSyADaxiMvkYrMU4GROEcs2LmSkBb9wouf6U:[DEFAULT]");  
    if(this.state==null){
      this.route.navigate(['']);
    }
  }

  ngOnInit(): void {

  }


  selectedBrand(BrandParams:string) {
    this.route.navigate(['../Category', { Brand: BrandParams}]);
  }

}
