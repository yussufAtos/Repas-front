
export interface LogicEfficiency {

  id: string;
  abstractLogic_id: string;
  idLogicEfficiency: string;
  selecteCount: number;
  usageCount: number;
  testCount: number;
  successCount: number;
  lastSelectDate: Date;
  lastUsageDate: Date;
  lastTestDate: Date;
  lastSuccessDate: Date;
  tested: boolean;
  efficient: boolean;
}
