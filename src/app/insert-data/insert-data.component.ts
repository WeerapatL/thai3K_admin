
import { TableDetail } from './../dataprovider/DataProvider';
import { Component, OnInit ,Inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../dataprovider/DataProvider';
import { CategoryComponent } from '../category/category.component';
// import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.css']
})
export class InsertDataComponent implements OnInit {

  getCategory: Category;
  selectedBrand:string;
  selectedCategory:string;
  
  showCateArray:any[];
  t: TableDetail;
  productDetail: any[] = [];
  runningIndex = 0;
  checkAll: boolean = false;

  constructor() {
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
  
  filterCateByBrand(brand){
    for(let i=0;i<this.getCategory.brand.length;i++){
      if(this.getCategory.brand[i].name==brand){
        this.showCateArray = this.getCategory.brand[i].category;
        break;
      }
    }    
  }

  alert(){
    //ถ้าหัวตารางว่าง 8 ช่อง
    alert('กรุณากรอกหัวข้อของรายละเอียดสินค้า');
    //ถ้าข้อมูลรายละเอียดว่าง 8 ช่อง
    alert('กรุณากรอกรายละเอียดของสินค้าอย่างน้อย 1 ช่อง'); 
    //ถ้ารหัสสินค้าว่าง
    alert('กรุณากรอกรหัสสินค้า');
    //ถ้า cate & brand
    alert('กรุณาเลือก category และ brand ของสินค้า');
    
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
}
