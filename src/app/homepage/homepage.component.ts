import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
// import { ActivatedRoute } from '@angular/router/src/router_state';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../../vendor/bootstrap/css/bootstrap.min.css', '../../css/modern-business.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    private route:Router) { 

  }

  ngOnInit() {
  }

  

  selectedCategory(){
    // new CategoryComponent(str);
    var text = 'Hello'
    this.route.navigate(['../Category',{data:text}])
  }

}
