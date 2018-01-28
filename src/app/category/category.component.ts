import { Product, DataParsing } from './../dataprovider/DataProvider';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { DataService } from '../dataprovider/DataService';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['../../vendor/bootstrap/css/bootstrap.min.css', '../../css/shop-homepage.css']
})
export class CategoryComponent implements OnInit {
  brand: string;
  id: number;
  CategoryComponent
  Product: Product[] = [];
  AllProduct: Product[] = [];
  state = null;
  page: number[] = [];
  constructor(private route: ActivatedRoute, public service: DataService, public router: Router) {
    this.state = localStorage.getItem("firebase:authUser:AIzaSyADaxiMvkYrMU4GROEcs2LmSkBb9wouf6U:[DEFAULT]");
  }

  ngOnInit() {
    if (this.state != null) {
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
              this.brand = 'KANOK Products';
            }
            if (this.id >= 16 && this.id <= 19) {
              this.brand = 'Nano Electrics';
            }
            if (this.id >= 20 && this.id <= 23) {
              this.brand = 'Thai 3K Plastic';
            }

          } else {
            if (this.brand != undefined) {
              this.service.getBrandProduct(this.brand).subscribe(result => {
                this.AllProduct = result;
                this.AllProduct = this.AllProduct.reverse();
                var tmpnum = +this.AllProduct.length / 12;
                for (let x = 0; x <= tmpnum; x++) {
                  this.page[x] = x + 1;
                }
                console.log(this.AllProduct);
                this.selectPage(1);
              });
              document.getElementById('showCategory').style.display = "none";
            }
          }
        } else {
          this.router.navigate(['../Home']);
        }

      });
    } else {
      this.router.navigate(['']);
    }
  }

  selectPage(number) {
    this.Product = [];
    var tmpProduct = [];
    var startProduct = 0;
    var init: number = (number - 1) * 12;
    var last: number = Math.min(init + 12 - 1, this.AllProduct.length - 1);
    for (init; init <= last; init++) {
      tmpProduct[startProduct] = this.AllProduct[init];
      startProduct++;
    }
    this.Product = tmpProduct;
    console.log(this.Product);
  }


  getCategoryProduct(CategoryParams: number) {
    this.service.getCategoryProduct(CategoryParams).subscribe(result => {
      this.AllProduct = result;
      this.AllProduct = this.AllProduct.reverse();
      var tmpnum = +this.AllProduct.length / 12;
      for (let x = 0; x <= tmpnum; x++) {
        this.page[x] = x + 1;
      }
      console.log(this.AllProduct);
      this.selectPage(1);
    });
  }
  selectedCategory(CategoryParams: number) {

    this.router.navigate(['../Category', { Brand: this.brand, CategoryID: CategoryParams }]);

  }
  selectedBrand(BrandParams: string) {
    this.router.navigate(['../Category', { Brand: BrandParams }]);

  }
  deleteProduct(p: Product) {
    if (window.confirm("Are you sure to delete this product?")) {
      this.service.deleteProduct(p).subscribe(result => {
        console.log(result);
      })
      let index = this.Product.indexOf(p);
      this.Product.splice(index, 1);
    }
  }
  editProduct(p: Product) {
    var myJSON = JSON.stringify(p);
    this.router.navigate(['../ProductDetail', { Product: myJSON }], { skipLocationChange: true });
  }
  imageSources: string[] = [
    '../../assets/kanok.jpg',
    '../../assets/nano.jpg',
    '../../assets/zeberg.jpg',
  ];

  config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE_OVERLAP,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 0
  };
}