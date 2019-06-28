import {User} from './User';

export interface LoginResult {
  stringToken: string;
  User: User;
}
