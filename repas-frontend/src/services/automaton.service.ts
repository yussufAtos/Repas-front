import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {PageOfAutomata} from '../data-model/automaton-model/PageOfAutomata';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AutomatonService {

  constructor(public http: HttpClient) {
  }

  getListAutomaton(page: number, size: number) {
    return this.http.get<PageOfAutomata>(encodeURI('/api/automata/all?page=' + page + '&size=' + size));
  }

  searchAutomatonById(id: string, page: number, size: number) {
    if (id === null || id === '') {
      return this.http.get<PageOfAutomata>(encodeURI('/api/automata/all?page=' + page + '&size=' + size));
    } else {
      return this.http.post<PageOfAutomata>('/api/automata/search?page=' + page + '&size=' + size, id.toUpperCase());
    }
  }
}
