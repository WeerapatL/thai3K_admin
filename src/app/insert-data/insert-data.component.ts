import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.css']
})
export class InsertDataComponent implements OnInit {

  productDetail = [
    {
      detail1: '',
      detail2: '',
      detail3: '',
      detail4: '',
      detail5: '',
      detail6: '',
      detail7: '',
      detail8: ''
    }];

  constructor() { }

  ngOnInit() {
  }

  insertRow() {
  }

  addRow() {
    this.productDetail.push({
      detail1: '',
      detail2: '',
      detail3: '',
      detail4: '',
      detail5: '',
      detail6: '',
      detail7: '',
      detail8: ''
    });
  }


}
