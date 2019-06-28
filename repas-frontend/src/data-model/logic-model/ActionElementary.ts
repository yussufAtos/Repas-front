import {ElementSetLink} from '../ElementSetLink';

export interface ActionElementary {
  id: number;
  assetId: string;
  targetStateOpened: boolean;
  name: string;
  delta: boolean;
  value: number;
  activeValue: number;
  reactiveValue: number;


  // EVariationType typeVariation;
  aConsoReelleFixe: boolean;
  deltaPdQdP: boolean;
  modifPimp: boolean;
  actif: number;
  reactif: number;
  useModeVarHypo: boolean;
  elementSetLinks: ElementSetLink[];
}
