import { Router } from '@angular/router';
import { Company } from './../dataprovider/DataProvider';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { DataService } from '../dataprovider/DataService';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../vendor/bootstrap/css/bootstrap.min.css', '../../css/modern-business.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  company: Company = new Company;
  mapURL: any;
  state = null;
  constructor(public router: Router, public service: DataService, public sanitizer: DomSanitizer) {
    this.state = localStorage.getItem("firebase:authUser:AIzaSyADaxiMvkYrMU4GROEcs2LmSkBb9wouf6U:[DEFAULT]");
    if (this.state != null) {
      this.service.getCompany().subscribe(result => {
        this.company = result[0];
        this.mapURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?" + this.company.CompanyMap + "&key=AIzaSyADaxiMvkYrMU4GROEcs2LmSkBb9wouf6U");
      });
    } else {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {

  }
  updateCompany(c: Company) {
    let alert;
    if (window.confirm("Do you want to update your company information")) {
      let fileBrowser = this.fileInput.nativeElement;
      if (fileBrowser.files && fileBrowser.files[0]) {
        console.log(fileBrowser.files[0]);
        const formData = new FormData();
        formData.append("fileToUpload", fileBrowser.files[0]);
        this.service.uploadResource(formData).subscribe(res => {
          alert = res.toString();
          if (alert === "The file " + "QRCODE.JPG" + " has been uploaded.") {
            c.CompanyQRCode = "QRCODE.JPG";
            console.log("Successfully");
          } else {
            window.alert(alert);
          }
        });
      }
      this.service.companyUpdate(c).subscribe(result => {
        console.log(result);
        window.location.reload();
      });
    } else {
      window.location.reload();
    }
  }
}

