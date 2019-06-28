import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MapLogics} from '../data-model/logic-model/MapLogics';


@Injectable()
export class UploadCatalogService {

  constructor(public http: HttpClient) {
  }

  uploadCatalog(file: File) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/xml; charset=utf-8');
    return this.http.put<MapLogics>('/api/apogee_remedials/create', file, {
      headers : headers,
      reportProgress: true
    });
  }
}
