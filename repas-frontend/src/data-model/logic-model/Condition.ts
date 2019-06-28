import {AbstractContextConditionOrList} from './AbstractContextConditionOrList';

export interface Condition {
  id: number;
  abstractContextConditionOrList: AbstractContextConditionOrList[];
  logicIdsString: string;
}
