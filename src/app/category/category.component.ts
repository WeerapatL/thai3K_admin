import { Product } from './../dataprovider/DataProvider';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { DataService } from '../dataprovider/DataService';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['../../vendor/bootstrap/css/bootstrap.min.css', '../../css/shop-homepage.css']
})
export class CategoryComponent implements OnInit {
  brand: string;
  id: number;
  CategoryComponent
  Product: Product[];

  constructor(private route: ActivatedRoute, public service: DataService, public router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(result => {
      this.brand = result['Brand'];
      this.id = result['CategoryID'];
      if (this.id != undefined || this.brand != undefined) {
        if (this.id != undefined) {
          this.getCategoryProduct(this.id);
          document.getElementById('showCategory').innerHTML = document.getElementById(this.id.toString()).innerHTML;
          document.getElementById('showCategory').style.display = "";
          if (this.id >= 1 && this.id <= 8) {
            this.brand = 'Zeberg';
          }
          if (this.id >= 9 && this.id <= 15) {
            this.brand = 'Kanok';
          }
          if (this.id >= 16 && this.id <= 19) {
            this.brand = 'Nano';
          }

        } else {
          if (this.brand != undefined) {
            this.service.getBrandProduct(this.brand).subscribe(result => {
              this.Product = result;
              console.log(this.Product);
            });
            document.getElementById('showCategory').style.display = "none";
          }
        }
      } else {
        this.router.navigate(['../Home']);
      }

    });

  }
  getCategoryProduct(CategoryParams: number) {
    this.service.getCategoryProduct(CategoryParams).subscribe(result => {
      this.Product = result;

      console.log(this.Product);
    });
  }
  selectedCategory(CategoryParams: number) {

    this.router.navigate(['../Category', { Brand: this.brand, CategoryID: CategoryParams }]);

  }
  selectedBrand(BrandParams: string) {
    // new CategoryComponent(str);
    this.router.navigate(['../Category', { Brand: BrandParams }]);

  }

}
