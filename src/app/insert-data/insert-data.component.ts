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

  // selected(row) {
  //   if (this.selectedRoundArr.indexOf(round.time) !== -1) {
  //     this.selectedRoundArr.splice(this.selectedRoundArr.indexOf(round.time), 1)
  //   } else {
  //     this.selectedRoundArr.push(round.time);
  //   }
  // }


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
