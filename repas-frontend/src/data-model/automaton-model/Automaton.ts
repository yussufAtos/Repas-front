export interface Automaton {

  id: number;
  beginningOfLife: Date;
  defaultEnabled: boolean;
  enabled: boolean;
  endOfLife: Date;
  exploitationComment: string;
  externalId: string;
  modelId: string;
  name: string;
  stateChangeComment: string;
  status: string;
  type: string;
  parameters: any;
}
