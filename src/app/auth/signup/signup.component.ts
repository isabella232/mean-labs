import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

// Uses template drive approach for Forms
export class SignUpComponent {
  isLoading = false;

  onLogin(form: NgForm) {

  }
}
