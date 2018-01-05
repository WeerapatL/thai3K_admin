import { TableDetail, Product } from './../dataprovider/DataProvider';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../dataprovider/DataProvider';
import { DataService } from '../dataprovider/DataService';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.css']
})
export class InsertDataComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  hasBaseDropZoneOver: boolean = false;

  //from Ng Model
  selectedBrand: string;
  selectedCategory: string;
  ProductName: string;
  ProductNameEng: string;
  ProductDesc: string;
  ProductImgPath: string;
  ProductCode: string;
  productDetail: any[] = [];
  TableHead1: string;
  TableHead2: string;
  TableHead3: string;
  TableHead4: string;
  TableHead5: string;
  TableHead6: string;
  TableHead7: string;
  TableHead8: string;
  getCategory: Category;
  showCateArray: any[];
  t: TableDetail;
  runningIndex = 0;
  checkAll: boolean = false;

  constructor(public service: DataService) {
    this.getCategory = new Category();

    console.log(this.getCategory.brand);

    this.t = new TableDetail();
    this.t.TableDetailNo = 0;
    this.t.TableDetail1 = null;
    this.t.TableDetail2 = null;
    this.t.TableDetail3 = null;
    this.t.TableDetail4 = null;
    this.t.TableDetail5 = null;
    this.t.TableDetail6 = null;
    this.t.TableDetail7 = null;
    this.t.TableDetail8 = null;
    this.t.ProductNo = null;
    this.productDetail.push({ TableDetail: this.t, Status: false });
    this.runningIndex = this.runningIndex + 1;
  }

  ngOnInit() {
  }

  filterCateByBrand(brand) {
    for (let i = 0; i < this.getCategory.brand.length; i++) {
      if (this.getCategory.brand[i].name == brand) {
        this.showCateArray = this.getCategory.brand[i].category;
        break;
      }
    }
  }

  alert(){
    alert("Hello");
  }


  addRow() {
    var t = new TableDetail();
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
    this.productDetail.push({ TableDetail: t, Status: false });
    this.runningIndex = this.runningIndex + 1;
  }

  deleteRow() {
    let count = this.productDetail.length - 1;
    for (let i = 0; i <= count; i++) {
      for (let j = 0; j <= this.productDetail.length - 1; j++) {
        if (this.productDetail[j].Status == true) {
          this.productDetail.splice(j, 1);
        }
      }
    }
  }

  deleteLastRow() {
    this.productDetail.splice(this.productDetail.length - 1, 1);
    this.runningIndex = this.runningIndex - 1;
  }

  selectAllRow() {
    if (!this.checkAll) {
      for (let i = 0; i <= this.productDetail.length - 1; i++) {
        this.productDetail[i].Status = true;
      }

      this.checkAll = true;
    } else {
      for (let i = 0; i <= this.productDetail.length - 1; i++) {
        this.productDetail[i].Status = false;
      }
      this.checkAll = false;
    }
  }

  selectRow(obj: any) {
    if (obj.Status) {
      obj.Status = false;
    } else {
      obj.Status = true;
    }
  }


  formValidation() {
    if (this.selectedBrand == undefined || this.selectedCategory == undefined || this.ProductCode == undefined || this.ProductCode == '') {
      console.log("category and Code Checking Undefined");
    }
    else {
      if ((this.TableHead1 == undefined && this.TableHead2 == undefined && this.TableHead3 == undefined && this.TableHead4 == undefined &&
        this.TableHead5 == undefined && this.TableHead6 == undefined && this.TableHead7 == undefined && this.TableHead8 == undefined) ||
        (this.TableHead1 == '' && this.TableHead2 == '' && this.TableHead3 == '' && this.TableHead4 == '' &&
          this.TableHead5 == '' && this.TableHead6 == '' && this.TableHead7 == '' && this.TableHead8 == '')) {
        console.log(" ALERT TableHead null all inbox ");
      } else {

        let fileBrowser = this.fileInput.nativeElement;
        if (fileBrowser.files && fileBrowser.files[0]) {
          console.log(fileBrowser.files[0]);
          this.ProductImgPath = fileBrowser.files[0].name;
          const formData = new FormData();
          formData.append("fileToUpload", fileBrowser.files[0]);
          let alert;

          this.service.uploadImage(formData).subscribe(res => {
            alert = res.toString();
            if (alert === "The file " + this.ProductImgPath + " has been uploaded.") {
              console.log("Picture Upload pass");
              let productInsert: Product = new Product();
              productInsert.ProductCode = this.ProductCode;
              productInsert.ProductName = this.ProductName;
              productInsert.ProductNameEng = this.ProductNameEng;
              productInsert.ProductDesc = this.ProductDesc;
              productInsert.ProductImgPath = this.ProductImgPath;
              productInsert.TableHead1 = this.TableHead1;
              productInsert.TableHead2 = this.TableHead2;
              productInsert.TableHead3 = this.TableHead3;
              productInsert.TableHead4 = this.TableHead4;
              productInsert.TableHead5 = this.TableHead5;
              productInsert.TableHead6 = this.TableHead6;
              productInsert.TableHead7 = this.TableHead7;
              productInsert.TableHead8 = this.TableHead8;
              productInsert.ProductCategoryID = +this.selectedCategory;
              let obj: any;
              this.service.createProduct(productInsert).subscribe(result => {
                obj = result;
                console.log(obj);
                for (let i = 0; i <= this.productDetail.length-1; i++) {
                let tmp: TableDetail = this.productDetail[i].TableDetail;
                if ((tmp == undefined) || (tmp.TableDetail1 == undefined && tmp.TableDetail2 == undefined && tmp.TableDetail3 == undefined && tmp.TableDetail4 == undefined &&
                  tmp.TableDetail5 == undefined && tmp.TableDetail6 == undefined && tmp.TableDetail7 == undefined && tmp.TableDetail8 == undefined) ||
                  (tmp.TableDetail1 == '' && tmp.TableDetail2 == '' && tmp.TableDetail3 == '' && tmp.TableDetail4 == '' &&
                    tmp.TableDetail5 == '' && tmp.TableDetail6 == '' && tmp.TableDetail7 == '' && tmp.TableDetail8 == '')) {
                  console.log("skip")
                } else {
                  tmp.ProductNo = obj.id;
                  this.service.createProductTableDetail(tmp).subscribe(result => {
                    console.log(result);
                  });

                }
              }
              console.log("TableDetail Upload pass");
              });
              console.log("Product upload pass");
            } else {
              console.log(alert);
            }
          });
        }else{
          console.log("no file");
        }
        }
      }
    }
  }
