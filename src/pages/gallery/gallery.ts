import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';

/*
  Generated class for the Gallery page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  private imageSrc: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  private openGallery (): void {
    let cameraOptions = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.FILE_URI,      
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: Camera.EncodingType.JPEG,      
      correctOrientation: true
    }

    Camera.getPicture(cameraOptions)
      .then(file_uri => this.imageSrc = file_uri, 
      err => console.log(err));   
    }
  }
