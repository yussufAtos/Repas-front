import {ActionElementary} from './ActionElementary';

export interface ActionComposite {
  id: number;
  assetId: string;
  actions: ActionElementary[];
}
