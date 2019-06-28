import {User} from '../../data-model/authentication/User';

export class TokenStorageMocked {

  public static getCurrentUser(): User {
    return {
      'nni': null,
      'firstName': '',
      'lastName': '',
      'email': 'admin',
      'enabled': true,
      'roles': [
        {
          'roleName': 'ROLE_ADMIN'
        },
        {
          'roleName': 'ROLE_ADVANCED'
        },
        {
          'roleName': 'ROLE_USER'
        }
      ]
    };
  }
}


