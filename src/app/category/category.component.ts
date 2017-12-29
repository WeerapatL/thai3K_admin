import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['../../vendor/bootstrap/css/bootstrap.min.css','../../css/shop-homepage.css']
})
export class CategoryComponent implements OnInit {
  text:string;
  sub:any;

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {  
    this.sub = this.route.params.subscribe(data => {
      this.text = data['data'];
      console.log(this.text);
    })
  }


}
