
import { TableDetail } from './../dataprovider/DataProvider';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.css']
})
export class InsertDataComponent implements OnInit {

  t: TableDetail;
  productDetail: any[] = [];
  runningIndex = 0;
  checkAll: boolean = false;

  constructor() {
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

  insertRow() {
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
