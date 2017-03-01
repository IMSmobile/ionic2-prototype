import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImsService } from '../../providers/ims-service';


/*
  Generated class for the ImsVersion page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ims-version',
  templateUrl: 'ims-version.html',
  providers: [ImsService]
})
export class ImsVersionPage {

  public version: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public imsService: ImsService) {
      console.log("Constructer called")
      this.version = "Loading..."
      this.imsService.getInfo().subscribe(info => this.version = info.version);
   }
}
