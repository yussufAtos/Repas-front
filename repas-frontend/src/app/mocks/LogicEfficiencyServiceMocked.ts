import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {of} from 'rxjs/observable/of';


export class LogicEfficiencyServiceMocked {

  getListLogicEfficiency(page: number, size: number) {
    return of({
      'content': [
        {
          'id': '8a80fb5b-83c1-4441-8ea5-8675c4e038a7',
          'abstractLogic_id': '9a464f36-ea7b-4c03-89be-8b1bb17da08e',
          'idLogicEfficiency': 'LOGELY631###BXLIEL41LUCON###9a464f36-ea7b-4c03-89be-8b1bb17da08e###Ouverture BXLIEL41LUCON',
          'contingencyCompositeKey': 'LOGELY631',
          'selecteCount': 2,
          'usageCount': 0,
          'testCount': 0,
          'successCount': 0,
          'applicationErrorCount': 0,
          'lastSelectDate': '2019-01-31T11:34:30.853Z',
          'lastUsageDate': null,
          'lastTestDate': null,
          'lastSuccessDate': null,
          'lastApplicationErrorDate': null
        },
        {
          'id': '109ae9e6-edec-4b95-b2fb-e993f77bf9bd',
          'abstractLogic_id': '83a522fa-479f-4cdb-bcbf-47c7d31d17be',
          'idLogicEfficiency': 'LOGELY631###BXLIEL41LUCON###83a522fa-479f-4cdb-bcbf-47c7d31d17be###2N BXLIEL4',
          'contingencyCompositeKey': 'LOGELY631',
          'selecteCount': 2,
          'usageCount': 0,
          'testCount': 0,
          'successCount': 0,
          'applicationErrorCount': 0,
          'lastSelectDate': '2019-01-31T11:34:30.860Z',
          'lastUsageDate': null,
          'lastTestDate': null,
          'lastSuccessDate': null,
          'lastApplicationErrorDate': null
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

  searchLogicEfficiencyById(id: string, page: number, size: number) {
    return this.getListLogicEfficiency(page, size);
  }
}
