import { Router } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
// import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
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
  loading = false;
  state = null
  constructor(public service: DataService,public Router:Router) {
    this.state = localStorage.getItem("firebase:authUser:AIzaSyADaxiMvkYrMU4GROEcs2LmSkBb9wouf6U:[DEFAULT]");  
    if(this.state==null){
      this.Router.navigate(['']);
    }else{
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

  alert(status:boolean,parameter:any){
    this.loading = false;
    if(status){
      document.getElementById('id01').style.display='block'
      if (parameter == 1) {//ถ้าหัวตารางว่าง 8 ช่อง
        document.getElementById('id01').innerHTML = 'กรุณากรอกหัวข้อของรายละเอียดสินค้า';          
      } else if (parameter == 2) {//ถ้าข้อมูลรายละเอียดว่าง 8 ช่อง
        document.getElementById('id01').innerHTML = 'กรุณากรอกรายละเอียดของสินค้าอย่างน้อย 1 ช่อง';          

      }else if(parameter==3){//ถ้ารหัสสินค้าว่าง
        document.getElementById('id01').innerHTML = 'กรุณากรอกรหัสสินค้า';          

      }else if(parameter==4){//ถ้า cate & brand
        document.getElementById('id01').innerHTML = 'กรุณาเลือก category และ brand ของสินค้า';          

      }else if(parameter==5){//ถ้า cate & brand
        document.getElementById('id01').innerHTML = 'กรุณาเลือกไฟล์รูปภาพ';          

      }else if(parameter != ''){//ถ้า cate & brand
        document.getElementById('id01').innerHTML = parameter;          

      }
    }else{
      document.getElementById('id01').style.display='none';
    }
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
    this.alert(false,'');
    this.loading = true;
    if (this.selectedBrand == undefined || this.selectedCategory == undefined || this.ProductCode == undefined || this.ProductCode == '') {
      if(this.selectedBrand == undefined || this.selectedCategory == undefined){
      this.alert(true,4);
      }if(this.ProductCode == undefined || this.ProductCode == ''){
      this.alert(true,3)
      }
    }
    else {
      if ((this.TableHead1 == undefined && this.TableHead2 == undefined && this.TableHead3 == undefined && this.TableHead4 == undefined &&
        this.TableHead5 == undefined && this.TableHead6 == undefined && this.TableHead7 == undefined && this.TableHead8 == undefined) ||
        (this.TableHead1 == '' && this.TableHead2 == '' && this.TableHead3 == '' && this.TableHead4 == '' &&
          this.TableHead5 == '' && this.TableHead6 == '' && this.TableHead7 == '' && this.TableHead8 == '')) {
        console.log(" ALERT TableHead null all inbox ");
        this.alert(true,1);
      } else {
        let count = this.productDetail.length;
        for (let j = 0; j <= count - 1; j++) {
          for (let i = 0; i <= this.productDetail.length - 1; i++) {
            if ((this.productDetail[i].TableDetail.TableDetail1 == '' || this.productDetail[i].TableDetail.TableDetail1 == null) &&
              (this.productDetail[i].TableDetail.TableDetail2 == '' || this.productDetail[i].TableDetail.TableDetail2 == null) &&
              (this.productDetail[i].TableDetail.TableDetail3 == '' || this.productDetail[i].TableDetail.TableDetail3 == null) &&
              (this.productDetail[i].TableDetail.TableDetail4 == '' || this.productDetail[i].TableDetail.TableDetail4 == null) &&
              (this.productDetail[i].TableDetail.TableDetail5 == '' || this.productDetail[i].TableDetail.TableDetail5 == null) &&
              (this.productDetail[i].TableDetail.TableDetail6 == '' || this.productDetail[i].TableDetail.TableDetail6 == null) &&
              (this.productDetail[i].TableDetail.TableDetail7 == '' || this.productDetail[i].TableDetail.TableDetail7 == null) &&
              (this.productDetail[i].TableDetail.TableDetail8 == '' || this.productDetail[i].TableDetail.TableDetail8 == null)) {
              this.productDetail.splice(i, 1);
            }
          }
        }if(this.productDetail.length != 0){
        let fileBrowser = this.fileInput.nativeElement;
        if (fileBrowser.files && fileBrowser.files[0]) {
          console.log(fileBrowser.files[0]);
          this.ProductImgPath = fileBrowser.files[0].name;
          const formData = new FormData();
          formData.append("fileToUpload", fileBrowser.files[0]);
          let alert;

          this.service.uploadImage(formData).subscribe(res => {
            alert = res.toString();
            console.log(alert);
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
                this.createTableDetail2(0,this.productDetail.length-1,obj.id);          
              });
            } else {
              this.alert(true,alert);
            }
          });
        }else{
          console.log("no file");
          this.alert(true,5);
        }
        }else{
          this.alert(true,2);
        }
      }
    }
  }
    createTableDetail2(start, end, productno) {
      this.productDetail[start].TableDetail.ProductNo = productno;
      this.service.createProductTableDetail(this.productDetail[start].TableDetail).subscribe(result => {
        if (start < end) {
          this.createTableDetail2(start + 1, end, productno);
        } else {
          console.log("Product upload pass");
          window.alert("Successfully");
          location.reload();
          
        }
      });
    }
  }
