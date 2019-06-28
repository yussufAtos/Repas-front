import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {TokenStorage} from './tokenStorage';

@Injectable()
export class AuthService {

  constructor(public jwtHelperService: JwtHelperService, public tokenStorage: TokenStorage) {
  }

  // ...
  public isAuthenticated(): boolean {

    const token = this.tokenStorage.getToken();

    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelperService.isTokenExpired(token);
  }

}
