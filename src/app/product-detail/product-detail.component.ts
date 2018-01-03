import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { DataService } from '../dataprovider/DataService';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['../../css/shop-item.css','../../vendor/bootstrap/css/bootstrap.min.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    public service: DataService, 
    public router: Router) { }

  ngOnInit() {
  }

  selectedProduct(){
    this.router.navigate(['../ProductDetail']);
  }
}
