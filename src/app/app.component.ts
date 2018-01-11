
import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Router } from '@angular/router';
import { DataService } from './dataprovider/DataService';
import { Company } from './dataprovider/DataProvider';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../vendor/bootstrap/css/bootstrap.min.css', '../css/modern-business.css']
})

export class AppComponent {
  title = 'Thai3K';
  company = new Company();
  showNavResponsive: boolean = false;

  constructor(public service: DataService, public router: Router) {
    this.service.getCompany().subscribe(result => {
      this.company = result[0];
    });
  }

  navResponsive() {
    this.showNavResponsive = !this.showNavResponsive;
    if (this.showNavResponsive) {
      document.getElementById("navbarResponsive").style.display = "block";
    } else {
      document.getElementById("navbarResponsive").style.display = "none";

    }
  }
}
