import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// Uses template drive approach for Forms
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authServiceSub: Subscription;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authServiceSub = this.authService.getAuthStatusListener().subscribe( authStatus => {
      this.isLoading = false;
    }
    );
  }

  ngOnDestroy() {
    this.authServiceSub.unsubscribe();
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;
    this.authService.login(form.value.email, form.value.password);
  }
}
