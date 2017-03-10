import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Credential } from '../model/credential';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Info } from './info';


@Injectable()
export class ImsService {

  public info: Info;


  constructor(public http: Http) {
  }

  login(credential: Credential): Observable<any> {
    return this.get(credential, "/rest/info");
  }

  get(credential: Credential, page: string): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Allow-Control-Allow-Origin', '*');
    headers.append("Authorization", "Basic " + btoa(credential.username + ":" + credential.password));
    return this.http.get(credential.server + page, { headers: headers }).map(res => res.json());
  }

  getInfo(credential: Credential): Observable<Info> {
    return this.get(credential, "/rest/info");
  }
}
