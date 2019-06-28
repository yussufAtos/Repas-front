
import {of} from 'rxjs/observable/of';


export class LogicServiceMocked {


  getListLogic(page: number, size: number) {
    return of({
      'content': [
        {
          'id': 8604,
          'shortDescription': '1/4 de barre avec AT762  à VAUPAP6',
          'description': '1/4 de barre avec AT762  à VAUPAP6',
          'creationDate': '2019-02-20T09:38:11.528Z',
          'modificationDate': '2019-02-20T09:38:11.528Z',
          'profile': 'SIMULATION',
          'contingencies': [],
          'rulesList': [
            {
              'id': 8604,
              'context':
                {
                  'id': 4033,
                  'condition':
                    {
                      'id': 16778,
                      'abstractContextConditionOrList': [
                        {
                          'id': 16779,
                          'atLeast': false,
                          'abstractContextConditionElementaryList': [
                            {
                              'id': 16780,
                              'assetId': 'VAUPAL61YAINV',
                              'assetType': 'LINE'
                            }]
                        }]
                    }
                },
              'preventiveAction': null,
              'curativeAction':
                {
                  'id': 43043,
                  'actionType': 'CompositeAction',
                  'assetId': null,
                  'complete': null,
                  'actions': [
                    {
                      'id': 43044,
                      'actionType': 'CompositeAction',
                      'assetId': 'YAINVP6',
                      'complete': false,
                      'actions': [
                        {
                          'id': 43045,
                          'actionType': 'SwitchOperation',
                          'assetId': 'YAINVP6',
                          'targetStateOpened': true,
                          'name': 'VAUPA   6COUPL.2  DJ'
                        }]
                    }]
                }
            }]
        }],
      'last': false,
      'totalElements': 1,
      'totalPages': 1,
      'size': 8,
      'number': 0,
      'sort': 'UNSORTED',
      'first': false,
      'numberOfElements': 1
    });
  }

  searchLogicById(id: string, page: number, size: number) {
    return this.getListLogic(page, size);
  }

  getActionComposit() {
    return {
      'id': 43045,
      'assetId': 'YAINVP6',
      'actions': [
        {
          'id': 43045,
          'assetId': 'YAINVP6',
          'targetStateOpened': true,
          'name': 'VAUPA   6COUPL.2  DJ',
          'delta': true,
          'value': 1,
          'activeValue': 1,
          'reactiveValue': 1,
          'aConsoReelleFixe': true,
          'deltaPdQdP': true,
          'modifPimp': true,
          'actif': 1,
          'reactif': 1,
          'useModeVarHypo': true,
          elementSetLinks: [{
            'id': 1,
            'name': 'test',
            'folder': 'test',
            'creator': 'test',
            'dtCreation': 'test',
            'dtModif': 'test',
            'description': 'test'
          }]
        }
      ]
    };
  }
}
