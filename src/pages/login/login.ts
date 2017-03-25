import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Credential} from '../../model/credential';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../providers/auth-service';
import { LocalStorage } from '../../providers/local-storage';
import { TabsPage } from '../tabs/tabs';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private credentialForm : FormGroup;
  public storageKey: string = "LoginPage.credential";


  constructor(public nav: NavController,public navParams: NavParams,public authService: AuthService, private formBuilder: FormBuilder, public localStore: LocalStorage) {
      this.credentialForm = this.formBuilder.group({ username: [''], password: [''], server: ['http://sinv-56028.edu.hsr.ch'] });
  }

  ionViewDidLoad() {
    this.localStore.getItems(this.storageKey).then(
      (data) => { 
        let existingData = Object.keys(data).length;
        if(existingData !== 0) {
            this.credentialForm.controls['server'].setValue(data['server']);
            this.credentialForm.controls['username'].setValue(data['username']);
            this.credentialForm.controls['password'].setValue(data['password']);
        }  
      });
  }

  login() {
    let server = this.credentialForm.value['server'];
    let username = this.credentialForm.value['username'];
    let password = this.credentialForm.value['password'];
    let credential = new Credential(server, username, password);
    this.authService.login(credential).subscribe(
      success => {
        this.authService.credential = credential;
        this.nav.setRoot(TabsPage);
        this.localStore.setItem(this.storageKey, JSON.stringify(credential));
      },
      err => {
        console.log("My error:" + err);
      });;
  }
}
