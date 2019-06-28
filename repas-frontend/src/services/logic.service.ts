import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {PageOfLogics} from '../data-model/logic-model/PageOfLogics';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class LogicService {

  constructor(public http: HttpClient) {
  }

  getListLogic(page: number, size: number) {
    return this.http.get<PageOfLogics>(encodeURI('/api/logics/all?page=' + page + '&size=' + size));
  }

  searchLogicById(id: string, page: number, size: number) {
    if (id === null || id === '') {
      return this.http.get<PageOfLogics>(encodeURI('/api/logics/all?page=' + page + '&size=' + size));
    } else {
      return this.http.post<PageOfLogics>('/api/logics/search?page=' + page + '&size=' + size, id.toUpperCase());
    }
  }
}
