import { Product, Category, TableDetail } from './../dataprovider/DataProvider';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { DataService } from '../dataprovider/DataService';






@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['../../css/shop-item.css', '../../vendor/bootstrap/css/bootstrap.min.css']
})
export class ProductDetailComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  brand: string;
  id: number;
  Product: Product;
  selectBrand: any;
  selectCategory: any;
  getCategory: Category;
  showCateArray: any[];
  status: boolean;
  t: TableDetail;
  ArrayTableDetail: any[] = [];
  runningIndex: number;
  ProductImgPath: any;
  loading: boolean = false;
  state = null;
  constructor(private route: ActivatedRoute, public service: DataService, public router: Router) {
    this.state = localStorage.getItem("firebase:authUser:AIzaSyADaxiMvkYrMU4GROEcs2LmSkBb9wouf6U:[DEFAULT]");

  }

  ngOnInit() {    
    if (this.state != null) {
      this.getCategory = new Category();
      console.log(this.getCategory.brand);
      this.route.params.subscribe(result => {
        this.Product = JSON.parse(result['Product']);
        console.log(this.Product);
        this.brand = this.Product.ProductBrand;
        this.id = this.Product.ProductCategoryID;
        for (let i = 0; i < this.Product.TableDetail.length; i++) {
          this.t = this.Product.TableDetail[i];
          this.runningIndex = this.Product.TableDetail[i].TableDetailNo;
          this.ArrayTableDetail.push(this.t);
        }
        this.filterCateByBrand();
      });
    } else {
      this.router.navigate(['']);
    }
  }
  filterCateByBrand() {
    for (let i = 0; i < this.getCategory.brand.length; i++) {
      if (this.getCategory.brand[i].name == this.Product.ProductBrand) {
        this.showCateArray = this.getCategory.brand[i].category;
        break;
      }
    }
  }
  selectedCategory(CategoryParams: number) {

    this.router.navigate(['../Category', { Brand: this.brand, CategoryID: CategoryParams }]);

  }
  selectedBrand(BrandParams: string) {

    this.router.navigate(['../Category', { Brand: BrandParams }]);

  }

  deleteRow(row: TableDetail) {
    let index = this.ArrayTableDetail.indexOf(row);
    this.ArrayTableDetail.splice(index, 1);
  }

  addRow() {
    var t = new TableDetail();
    this.runningIndex = this.runningIndex + 1
    t.TableDetailNo = this.runningIndex;
    t.TableDetail1 = null;
    t.TableDetail2 = null;
    t.TableDetail3 = null;
    t.TableDetail4 = null;
    t.TableDetail5 = null;
    t.TableDetail6 = null;
    t.TableDetail7 = null;
    t.TableDetail8 = null;
    t.ProductNo = null;
    this.ArrayTableDetail.push(t);
  }

  edit() {
    if (window.confirm("Are you sure to edit this item")) {
      if (((this.Product.ProductCode != undefined && this.Product.ProductCode != '' && this.Product.ProductCode != null) && (this.Product.ProductBrand != undefined && this.Product.ProductCategoryID != undefined && this.Product.ProductBrand != null && this.Product.ProductCategoryID != null && this.Product.ProductBrand != '')) && (
        (this.Product.TableHead1 != undefined && this.Product.TableHead1 != '' && this.Product.TableHead1 != null) || (this.Product.TableHead2 != undefined && this.Product.TableHead2 != '' && this.Product.TableHead2 != null) ||
        (this.Product.TableHead3 != undefined && this.Product.TableHead3 != '' && this.Product.TableHead3 != null) || (this.Product.TableHead4 != undefined && this.Product.TableHead4 != '' && this.Product.TableHead4 != null) ||
        (this.Product.TableHead5 != undefined && this.Product.TableHead5 != '' && this.Product.TableHead5 != null) || (this.Product.TableHead6 != undefined && this.Product.TableHead6 != '' && this.Product.TableHead6 != null) ||
        (this.Product.TableHead7 != undefined && this.Product.TableHead7 != '' && this.Product.TableHead7 != null) || (this.Product.TableHead8 != undefined && this.Product.TableHead8 != '' && this.Product.TableHead8 != null)
      )
      ) {
        let count = this.ArrayTableDetail.length;
        for (let j = 0; j <= count - 1; j++) {
          for (let i = 0; i <= this.ArrayTableDetail.length - 1; i++) {
            if ((this.ArrayTableDetail[i].TableDetail1 == '' || this.ArrayTableDetail[i].TableDetail1 == null) &&
              (this.ArrayTableDetail[i].TableDetail2 == '' || this.ArrayTableDetail[i].TableDetail2 == null) &&
              (this.ArrayTableDetail[i].TableDetail3 == '' || this.ArrayTableDetail[i].TableDetail3 == null) &&
              (this.ArrayTableDetail[i].TableDetail4 == '' || this.ArrayTableDetail[i].TableDetail4 == null) &&
              (this.ArrayTableDetail[i].TableDetail5 == '' || this.ArrayTableDetail[i].TableDetail5 == null) &&
              (this.ArrayTableDetail[i].TableDetail6 == '' || this.ArrayTableDetail[i].TableDetail6 == null) &&
              (this.ArrayTableDetail[i].TableDetail7 == '' || this.ArrayTableDetail[i].TableDetail7 == null) &&
              (this.ArrayTableDetail[i].TableDetail8 == '' || this.ArrayTableDetail[i].TableDetail8 == null)) {
              this.ArrayTableDetail.splice(i, 1);
              console.log(2);
            }
          }
        }
        this.loading = true;
        let fileBrowser = this.fileInput.nativeElement;
        let tmpImgPath;
        if (fileBrowser.files && fileBrowser.files[0]) {
          console.log(fileBrowser.files[0]);
          this.ProductImgPath = fileBrowser.files[0].name;
          const formData = new FormData();
          formData.append("fileToUpload", fileBrowser.files[0]);
          if (this.ArrayTableDetail.length == 0) {
            this.service.deleteTabledetail(this.Product).subscribe(result => {
              this.alert(true, 2);
              console.log(3);
            });
          } else {
            this.service.uploadImage(formData).subscribe(result => {
              let alert = result.toString();
              console.log(alert);
              if (alert === "The file " + this.ProductImgPath + " has been uploaded.") {
                tmpImgPath = this.Product.ProductImgPath;
                this.Product.ProductImgPath = this.ProductImgPath;
                this.Product.TableDetail = this.ArrayTableDetail;
                this.service.deleteTabledetail(this.Product).subscribe(result => {
                  this.service.updateProduct(this.Product).subscribe(result => {
                    this.createTableDetail(0, this.Product.TableDetail.length - 1, this.Product.ProductNo, tmpImgPath);
                  });
                });
              } else {
                this.alert(true, alert);
              }
            });
          }
        } else {
          if (this.ArrayTableDetail.length == 0) {
            this.service.deleteTabledetail(this.Product).subscribe(result => {
              this.alert(true, 2);
              console.log(3);
            });
          } else {
            this.Product.TableDetail = this.ArrayTableDetail;
            this.service.deleteTabledetail(this.Product).subscribe(result => {
              this.service.updateProduct(this.Product).subscribe(result => {
                this.createTableDetail2(0, this.Product.TableDetail.length - 1, this.Product.ProductNo);
              });
            });
          }
        }
      } else {
        if (this.Product.ProductCode == undefined || this.Product.ProductCode == '' || this.Product.ProductCode == null) {
          this.alert(true, 3);
        }
        if (this.Product.ProductBrand != undefined || this.Product.ProductCategoryID != undefined || this.Product.ProductBrand != null || this.Product.ProductCategoryID != null || this.Product.ProductBrand != '') {
          this.alert(true, 4);
        }
        if (
          (this.Product.TableHead1 == undefined || this.Product.TableHead1 == '' || this.Product.TableHead1 == null) && (this.Product.TableHead2 == undefined || this.Product.TableHead2 == '' || this.Product.TableHead8 == null) &&
          (this.Product.TableHead3 == undefined || this.Product.TableHead3 == '' || this.Product.TableHead3 == null) && (this.Product.TableHead4 == undefined || this.Product.TableHead4 == '' || this.Product.TableHead8 == null) &&
          (this.Product.TableHead5 == undefined || this.Product.TableHead5 == '' || this.Product.TableHead5 == null) && (this.Product.TableHead6 == undefined || this.Product.TableHead6 == '' || this.Product.TableHead8 == null) &&
          (this.Product.TableHead7 == undefined || this.Product.TableHead7 == '' || this.Product.TableHead7 == null) && (this.Product.TableHead8 == undefined || this.Product.TableHead8 == '' || this.Product.TableHead8 == null)
        ) {
          this.alert(true, 1)
        }
        console.dir(this.Product);
      }
    }

  }
  alert(status: boolean, parameter: any) {

    if (status) {
      document.getElementById('id01').style.display = 'block'
      this.loading = false;
      if (parameter == 1) {//ถ้าหัวตารางว่าง 8 ช่อง
        document.getElementById('id01').innerHTML = 'กรุณากรอกหัวข้อของรายละเอียดสินค้า';

      } else if (parameter == 2) {//ถ้าข้อมูลรายละเอียดว่าง 8 ช่อง
        document.getElementById('id01').innerHTML = 'กรุณากรอกรายละเอียดของสินค้าอย่างน้อย 1 ช่อง';

      } else if (parameter == 3) {//ถ้ารหัสสินค้าว่าง
        document.getElementById('id01').innerHTML = 'กรุณากรอกรหัสสินค้า';

      } else if (parameter == 4) {
        document.getElementById('id01').innerHTML = 'กรุณาเลือก category และ brand ของสินค้า';

      } else if (parameter == 5) {
        document.getElementById('id01').innerHTML = 'กรุณาเลือกไฟล์รูปภาพ';

      } else if (parameter != '') {
        document.getElementById('id01').innerHTML = parameter;

      }
    } else {
      document.getElementById('id01').style.display = 'none';
    }
  }
  createTableDetail(start, end, productno, tmpImgPath) {
    this.Product.TableDetail[start].ProductNo = productno;
    this.service.createProductTableDetail(this.Product.TableDetail[start]).subscribe(result => {
      if (start < end) {
        this.createTableDetail(start + 1, end, productno, tmpImgPath);
      } else {
        this.service.deleteImg({ ProductImgPath: tmpImgPath }).subscribe(res => {
          this.ArrayTableDetail = [];
          console.log(res);
        },error=>{console.log('fail')},
        ()=>{
          this.loading = false;
          window.location.reload();
        });
      }
    });
  }
  createTableDetail2(start, end, productno) {
    this.Product.TableDetail[start].ProductNo = productno;
    this.service.createProductTableDetail(this.Product.TableDetail[start]).subscribe(result => {
      if (start < end) {
        this.createTableDetail2(start + 1, end, productno);
      } else {
        this.loading = false;
        window.location.reload();
      }
    });
  }
}
