import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  check = "";
  loading = false;
  state = null;
  constructor(public AngularFireAuth: AngularFireAuth, public Router: Router) {
    this.state = localStorage.getItem("firebase:authUser:AIzaSyADaxiMvkYrMU4GROEcs2LmSkBb9wouf6U:[DEFAULT]");
  }
  ngOnInit() {
    if (this.state != null) {
      this.Router.navigate(['Home']);
    }
  }
  login(email, password) {
    this.check = "";  
    this.loading = true;
    if (email == null || password == null ||email == undefined || password == undefined) {
      email = "";
      password = "";
    }
    this.AngularFireAuth.auth.signInWithEmailAndPassword(email + "@gmail.com", password).catch(e => {
      this.check = e.message;
    }
    ).then(result => {
      if (this.check == "") {
        this.state = localStorage.getItem("firebase:authUser:AIzaSyADaxiMvkYrMU4GROEcs2LmSkBb9wouf6U:[DEFAULT]")
        window.location.reload();
        
        
      } else {
        this.alert(true, this.check);
      }
    });
    this.loading = false;
  }
  alert(status: boolean, parameter: any) {
    this.loading = false;
    if (status) {
      document.getElementById('id01').style.display = 'block'
      if (parameter != '') {//ถ้า cate & brand
        document.getElementById('id01').innerHTML = parameter;

      }
    } else {
      document.getElementById('id01').style.display = 'none';
    }
  }
  logout() {
    this.loading = true;
    this.AngularFireAuth.auth.signOut().catch(e => {
      this.alert(true, e.message);
      this.check = e.message;
    }).then(e => {
      if (this.check = "") {
        this.alert(true, 'You have been logout.');
        localStorage.removeItem("firebase:authUser:AIzaSyADaxiMvkYrMU4GROEcs2LmSkBb9wouf6U:[DEFAULT]");
        this.state = null;
      }
    });
    this.loading = false;
    window.location.reload();
  }
}