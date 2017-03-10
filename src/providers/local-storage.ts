import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NativeStorage } from 'ionic-native';
import 'rxjs/add/operator/map';

/*
  Generated class for the LocalStorage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocalStorage {

  private storedData: any;

  constructor(public http: Http) {
    console.log('Hello LocalStorage Provider');
  }

  setItem(itemName, itemValue): any {
    return new Promise(resolve => {
      NativeStorage.setItem(itemName, itemValue)
        .then((data) => {
          resolve(true);
        },
        (error) => {
          console.log("Fail to set storage key value");
        });
    });
  }

  getItems(itemKey) {
    return new Promise(resolve => {
      NativeStorage.getItem(itemKey)
        .then(
        (data) => {
          this.storedData = JSON.parse(data);
          resolve(this.storedData);
        },
        (error) => {
          console.log("We don’t get data!");
        }
        )
    });
  }
}
