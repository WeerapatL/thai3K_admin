import { Product } from './../dataprovider/DataProvider';
import { DataService } from './../dataprovider/DataService';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
// import { ActivatedRoute } from '@angular/router/src/router_state';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../../vendor/bootstrap/css/bootstrap.min.css', '../../css/modern-business.css']
})
export class HomepageComponent implements OnInit {
  allProduct: Product[] = [];


  constructor(
    private route: Router,
    public service: DataService) {
    // this.service.getProducts().subscribe(result => {
    //   this.allProduct = result;
    //   console.log(result);
    // });
  }

  ngOnInit(): void {

  }


  selectedBrand(BrandParams:string) {
    // new CategoryComponent(str);
    this.route.navigate(['../Category', { Brand: BrandParams}]);
  }

}
