import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/jwtServices/Authentication.service';
import {routerTransition} from '../router.animations';
import {TokenStorage} from '../../services/jwtServices/tokenStorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  data: any;
  erreur = false;
  username = '';
  password = '';

  constructor(private formBuilder: FormBuilder, private token: TokenStorage,
              private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // The purpose of this call is to initialize the xsrf exchange.
    // The first time the frontend calls a POST method on the backend, no Xsrf cookie is known
    // thus the result is a 403 error (forbidden). But an Xsrf cookie will
    // also be returned at the same time.
    // The frontend will then automatically fill the Xsrf header to the following POST calls.
    // Without this call, the first login tentative will always fail
    // (no Xsrf cookie known => the Xsrf header will be empty).
    this.authenticationService.initXsrf();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.signIn(this.f.username.value, this.f.password.value)
      .subscribe(data => {
        this.data = data;
        window.sessionStorage.setItem('isLoggedin', 'true');
        this.token.saveToken(this.data);
        this.router.navigate(['/home'], {skipLocationChange: true});
      }, error => {
        this.loading = false;
        this.erreur = true;
        this.router.navigate(['login'], {skipLocationChange: true});
      });
  }
}
