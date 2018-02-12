
import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Router } from '@angular/router';
import { DataService } from './dataprovider/DataService';
import { Company } from './dataprovider/DataProvider';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../vendor/bootstrap/css/bootstrap.min.css', '../css/modern-business.css']
})

export class AppComponent {
  title = 'Thai3K';
  company = new Company();
  showNavResponsive: boolean = false;
  state = null;
  check="";
  constructor(public service: DataService, public router: Router,public AngularFireAuth:AngularFireAuth) {
    this.state = localStorage.getItem("firebase:authUser:AIzaSyADaxiMvkYrMU4GROEcs2LmSkBb9wouf6U:[DEFAULT]");
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
  logout() {
    this.AngularFireAuth.auth.signOut().catch(e => {
      window.alert(e.message);
      this.check="";
    }).then(e => {
      if (this.check = "") {
        localStorage.removeItem("firebase:authUser:AIzaSyADaxiMvkYrMU4GROEcs2LmSkBb9wouf6U:[DEFAULT]");
        this.state = null;
      }
    });
    this.router.navigate(['']);
  }
}
