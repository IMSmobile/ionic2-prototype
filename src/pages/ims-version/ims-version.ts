import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImsService } from '../../providers/ims-service';
import { AuthService } from '../../providers/auth-service';



@Component({
  selector: 'page-ims-version',
  templateUrl: 'ims-version.html',
})
export class ImsVersionPage {

  public version: string;
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public imsService: ImsService) {
    console.log("Constructer called")
    this.version = "Loading..."
    this.imsService.getInfo(authService.credential).subscribe(info => this.version = info.version);
   }
}
