import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {LoginResult} from '../../data-model/authentication/LoginResult';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from '../../data-model/authentication/User';
import {Observable} from 'rxjs/Observable';


const TOKEN_KEY = 'AuthToken';
const USER = 'User';

@Injectable()
export class TokenStorage {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor() {
  }

  signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER);
    window.sessionStorage.clear();
  }

  public saveToken(token: LoginResult) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token.stringToken);
    localStorage.setItem(USER, JSON.stringify(token.User));
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public handleError(error: any, router: Router) {
    console.log(error);
    if (error.status === 401) {
      router.navigate(['login'], {skipLocationChange: true});
      window.sessionStorage.removeItem('isLoggedin');
      this.signOut();
    }
  }


  public getCurrentUser(): User {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('User')));
    this.currentUser = this.currentUserSubject.asObservable();
    return this.currentUserSubject.value;
  }

}
