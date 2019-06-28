
import {of} from 'rxjs/observable/of';


export class AutomatonServiceMocked {

  getListAutomaton(page: number, size: number) {
    return of({
      'content': [
        {
          'id': 1,
          'name': 'ADA1',
          'type': 'CurrentLimitAutomaton',
          'modelId': 'CurrentLimitAutomaton',
          'externalId': 'id_tomate2_ADA_1',
          'defaultEnabled': true,
          'enabled': true,
          'status': 'IN_OPERATION',
          'beginningOfLife': '2018-02-05T23:00:00Z',
          'endOfLife': '2020-03-05T23:00:00Z',
          'exploitationComment': 'Ici on trouve un très long texte, vraiment Trop long pour tenir sur une seule ligne et a fortiori dans la case correspondant à la valeur dans le tableau à gauche',
          'stateChangeComment': 'Ici on trouve un très long texte, vraiment Trop long pour tenir sur une seule ligne et a fortiori dans la case correspondant à la valeur dans le tableau à gauche',
          'parameters': {
            'monitoredAsset': 'Ouvrage1',
            'orientation': 'UP_STREAM',
            'defaultThresholdName': 'ETE',
            'currentThresholdName': 'ETE',
            'threshold_name_1': 'ETE',
            'threshold_value_1': '122.3',
            'threshold_remoteControlled_1': 'true',
            'threshold_name_2': 'HIVER1',
            'threshold_value_2': '141.4',
            'threshold_remoteControlled_2': 'true',
            'remoteControlledCommissioning': 'false',
            'order_delay_1': '20',
            'order_value_1': 'OPEN',
            'order_bay_1': 'ANCERL31SSAVO',
            'order_delay_2': '40',
            'order_value_2': 'OPEN',
            'order_bay_2': 'ANCERL31SSJUL'
          }
        },
        {
          'id': 2,
          'name': 'ADA2',
          'type': 'CurrentLimitAutomaton',
          'modelId': 'CurrentLimitAutomaton',
          'externalId': 'id_tomate2_ADA_1',
          'defaultEnabled': true,
          'enabled': false,
          'status': 'IN_OPERATION',
          'beginningOfLife': '2018-02-05T23:00:00Z',
          'endOfLife': '2020-03-05T23:00:00Z',
          'exploitationComment': '',
          'stateChangeComment': '',
          'parameters': {
            'order_value_1': 'OPEN',
            'order_value_2': 'OPEN',
            'orientation': 'UP_STREAM',
            'threshold_value_2': '141.4',
            'currentThresholdName': 'ETE',
            'order_delay_1': '20',
            'monitoredAsset': 'Ouvrage1',
            'order_delay_2': '40',
            'defaultThresholdName': 'ETE',
            'threshold_remoteControlled_1': 'true',
            'threshold_remoteControlled_2': 'true',
            'threshold_name_2': 'HIVER1',
            'threshold_name_1': 'ETE',
            'remoteControlledCommissioning': 'false',
            'order_bay_2': 'ANCERL31SSJUL',
            'threshold_value_1': '122.3',
            'order_bay_1': 'ANCERL31SSAVO'
          }
        }
      ],
      'last': false,
      'totalElements': 2,
      'totalPages': 1,
      'size': 8,
      'number': 0,
      'sort': 'UNSORTED',
      'first': false,
      'numberOfElements': 2
    });
  }

  searchAutomatonById(id: string, page: number, size: number) {
    return this.getListAutomaton(page, size);
  }
}
