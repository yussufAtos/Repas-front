import {RulesList} from './RulesList';
import {CompositeContingency} from './CompositeContingency';


export interface StandardLogic {
  id: number;

  shortDescription: string;
  description: string;
  creationDate: Date;
  modificationDate: Date;

  rulesList: RulesList[];
  contingencies: CompositeContingency[];
  profile: string;
}
