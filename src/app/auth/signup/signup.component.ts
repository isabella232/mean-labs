import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

// Uses template drive approach for Forms
export class SignUpComponent implements OnInit, OnDestroy {
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

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(form.value.email, form.value.password);
  }
}
