import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {AuthenticationService} from './Authentication.service';
import {TokenStorage} from './tokenStorage';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(public router: Router, private authenticationService: AuthenticationService, private tokenStorage: TokenStorage) {
  }

  public canActivate(route: ActivatedRouteSnapshot) {
    if (window.sessionStorage.getItem('isLoggedin')) {
      if (route.data.roles != null) {
        const user = this.tokenStorage.getCurrentUser();
        for (let role of user.roles) {
          // check if route is restricted by role
          for (let roleAuthorized of route.data.roles) {
            if (role.roleName === roleAuthorized) {
              // authorised so return true
              return true;
            }
          }
        }
        // role not authorised so redirect to home page
        this.router.navigate(['/']);
        return false;
      } else {
        // the path is not secured so authorized return true
        return true;
      }
    }
    this.router.navigate(['/login'], {skipLocationChange: true});
    return false;
  }
}
