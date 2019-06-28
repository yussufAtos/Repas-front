import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {PageOfLogicEfficiencies} from '../data-model/logic-efficiency-model/PageOfLogicEfficiencies';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class LogicEfficiencyService {

  constructor(public http: HttpClient) {
  }

  getListLogicEfficiency(page: number, size: number) {
    return this.http.get<PageOfLogicEfficiencies>(encodeURI('/api/efficiency/all?page=' + page + '&size=' + size));
  }

  searchLogicEfficiencyById(id: string, page: number, size: number) {
    if (id === null || id === '') {
      return this.http.get<PageOfLogicEfficiencies>(encodeURI('/api/efficiency/all?page=' + page + '&size=' + size));
    } else {
      return this.http.post<PageOfLogicEfficiencies>('/api/efficiency/search?page=' + page + '&size=' + size, id.toUpperCase());
    }
  }
}
