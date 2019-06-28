import {Context} from './Context';
import {CurativeAction} from './CurativeAction';

export interface RulesList {
  id: number;
  context: Context;
  preventiveAction: CurativeAction;
  curativeAction: CurativeAction;
}
