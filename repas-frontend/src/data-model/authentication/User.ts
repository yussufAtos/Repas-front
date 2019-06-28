import {Role} from './Role';

export interface User {

  nni: string;
  firstName: string;
  lastName: string;
  email: string;
  enabled: boolean;
  roles: Role[];
}
