import {ActionComposite} from './ActionComposite';

export interface CurativeAction {
  id: number;
  assetId?: any;
  actions: ActionComposite[];
}


