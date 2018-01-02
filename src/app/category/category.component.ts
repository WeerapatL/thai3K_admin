import { Product } from './../dataprovider/DataProvider';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../dataprovider/DataService';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['../../vendor/bootstrap/css/bootstrap.min.css', '../../css/shop-homepage.css']
})
export class CategoryComponent implements OnInit {
  text: string;
  id: number
  Product: Product[];
  constructor(private route: ActivatedRoute, public service: DataService, public router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(result => {
      this.text = result['Brand'];
      this.id = result['CategoryID'];
      if (this.id != undefined) {
        this.getCategoryProduct(this.id);
      } else {
        this.service.getBrandProduct(this.text).subscribe(result => {
          this.Product = result;
          console.log(this.Product);
        });

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
    // new CategoryComponent(str);
    this.router.navigate(['../Category', { Brand: this.text, CategoryID: CategoryParams }]);
  }

}
