
import {of} from 'rxjs/observable/of';


export class AuthenticationServiceMocked {

  initXsrf() {
  }

  signIn(username: string, password: string) {
    return of({
      'stringToken': 'aaa'
    });
  }

}
