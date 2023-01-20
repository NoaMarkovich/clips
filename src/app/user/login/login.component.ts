import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: '',
  };
  showAlert = false;
  alertMsg = 'Please Wait';
  alertColor = 'blue';
  inSubmittion = false;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please Wait';
    this.alertColor = 'blue';
    this.inSubmittion = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
    } catch (e) {
      this.inSubmittion = false;
      this.alertMsg = 'An unexpected error occurred. Please try again later.';
      this.alertColor = 'red';
      return;
      console.log(e);
    }
    this.alertMsg = 'Success! You are logged in';
    this.alertColor = 'green';
  }
}
