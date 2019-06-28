import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginResult} from '../../data-model/authentication/LoginResult';

@Injectable()
export class AuthenticationService {

  constructor(public http: HttpClient) {
  }

  initXsrf() {
    this.http.post<any>('/api/technical/init_csrf', {})
      .subscribe(data => {}, error => {});
  }

  signIn(username: string, password: string) {
    return this.http.post<LoginResult>('/api/users/signin',
      {
        username : username,
        password : password
      }
      );
  }
}
