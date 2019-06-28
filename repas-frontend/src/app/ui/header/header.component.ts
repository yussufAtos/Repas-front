import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorage} from '../../../services/jwtServices/tokenStorage';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, private token: TokenStorage, private translate: TranslateService, private tokenStorage: TokenStorage) {
    translate.setDefaultLang('fr');
  }

  ngOnInit() {
  }

  logout() {
    window.sessionStorage.removeItem('isLoggedin');
    this.router.navigate(['/login'], {skipLocationChange: true});
    this.token.signOut();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  public itHasAdminOrAdvancedRole() {
    const user = this.tokenStorage.getCurrentUser();
    for (let role of user.roles) {
      // check if route is restricted by role
      if (role.roleName === 'ROLE_ADMIN' || role.roleName === 'ROLE_ADVANCED') {
        return true;
      }
    }
    return false;
  }
}
