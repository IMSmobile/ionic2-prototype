import { Injectable } from '@angular/core';
import { Http } from '@angular/http';import { NavController, NavParams } from 'ionic-angular';
import { ImsService } from './ims-service';
import { Credential } from '../model/credential';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  public credential :Credential;

  constructor(public http: Http, public imsService: ImsService) {}


  login(credential: Credential): Observable<any> {
    return this.imsService.login(credential);
  }

}
