import { Company } from './../dataprovider/DataProvider';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { DataService } from '../dataprovider/DataService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../vendor/bootstrap/css/bootstrap.min.css', '../../css/modern-business.css']
})
export class ContactComponent implements OnInit {
  company: Company = new Company;
  constructor(public service: DataService) {

  }

  ngOnInit() {
    this.service.getCompany().subscribe(result=>{
      this.company=result[0];
    });
  }

}
