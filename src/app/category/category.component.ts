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

  BrandProduct: Product[];
  constructor(private route: ActivatedRoute, public service: DataService) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(result => {
      this.text = result['Brand'];
      this.service.getBrandProduct(this.text).subscribe(result => {
        this.BrandProduct = result;
        console.log(this.BrandProduct);
      });
    });

  }


}
