import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

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
  public downloadStatus: string;

  constructor(public transfer: Transfer, public file: File, public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  private takePicture(): void {
    let cameraOptions = {
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      saveToPhotoAlbum: false
    }

    Camera.getPicture(cameraOptions).then((imageData) => {
      this.imageSrc = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  private downloadFile(): void {
    const fileTransfer: TransferObject = this.transfer.create();
    const url = 'http://ipv4.download.thinkbroadband.com/100MB.zip';
    console.log("Start downloading huge file");
    fileTransfer.download(url, this.file.dataDirectory + 'file.zip').then((entry) => {
      console.log("Finished downloading huge file:" + entry.toURL());
    }, (error) => {
      console.log("Error downloading huge file");
    });
  }

  private openGallery(): void {
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
