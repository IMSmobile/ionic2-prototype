import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImsService } from '../../providers/ims-service';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalStorage } from '../../providers/local-storage';



/*
  Generated class for the ImsVersion page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ims-version',
  templateUrl: 'ims-version.html',
  providers: [ImsService, LocalStorage]
})
export class ImsVersionPage {

  public version: string;
  private credentials: FormGroup;
  public storageKey: string = "ims-versions.credential";

  constructor(public navCtrl: NavController, public navParams: NavParams, public imsService: ImsService, public localStore: LocalStorage, public alertCtrl: AlertController, private formBuilder: FormBuilder) {
    console.log("Constructer called")
    this.version = "Loading..."
    this.imsService.getInfo().subscribe(info => this.version = info.version);
    this.credentials = this.formBuilder.group({ username: [''], password: [''], server: [''] });
  }

  ionViewDidLoad() {
    this.localStore.getItems(this.storageKey).then(
      (data) => { 
        let existingData = Object.keys(data).length;
        if(existingData !== 0) {
            this.credentials.controls['server'].setValue(data['server']);
            this.credentials.controls['username'].setValue(data['username']);
            this.credentials.controls['password'].setValue(data['password']);
        }  
      });
  }

  showImsVersion() {
    let server = this.credentials.value['server'];
    let username = this.credentials.value['username'];
    let password = this.credentials.value['password'];
    this.imsService.getInfo(server, username, password).subscribe(info => this.showImsVersionAlert(info.version));
    let value = JSON.stringify({'server':server, 'username': username, 'password': password });
    this.localStore.setItem(this.storageKey, value);
  }


  showImsVersionAlert(version) {
    this.version = version;
    let alert = this.alertCtrl.create({
      title: 'Ims Version!',
      subTitle: 'Current Version: ' + this.version,
      buttons: ['OK']
    });
    alert.present()
  }
}
