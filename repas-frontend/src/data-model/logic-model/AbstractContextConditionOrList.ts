import {AbstractContextConditionElementaryList} from './AbstractContextConditionElementaryList';

export interface AbstractContextConditionOrList {
  id: number;
  atLeast: boolean;
  abstractContextConditionElementaryList: AbstractContextConditionElementaryList[];
}
