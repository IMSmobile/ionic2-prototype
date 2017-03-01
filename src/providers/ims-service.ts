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

  getInfo(): Observable<Info>  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Allow-Control-Allow-Origin', '*');
    headers.append("Authorization", "Basic " + btoa("admin:admin"));
    return this.http.get("http://mars.imagic.ch:3171/rest/info", {headers: headers}).map(res => res.json());    
  }


}
