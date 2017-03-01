import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Info} from './info';


@Injectable()
export class ImsService {

  public info: Info;


  constructor(public http: Http) {
  }

  getInfo(serverBaseUrl="http://mars.imagic.ch:3171", username="admin", password = "admin"): Observable<Info>  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Allow-Control-Allow-Origin', '*');
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    return this.http.get(serverBaseUrl + "/rest/info", {headers: headers}).map(res => res.json());    
  }


}
