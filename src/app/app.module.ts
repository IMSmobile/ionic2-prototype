import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { AuthService } from '../providers/auth-service';
import { ImsService } from '../providers/ims-service';
import { LocalStorage } from '../providers/local-storage';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { LoginPage } from '../pages/login/login';
import { ImsVersionPage } from '../pages/ims-version/ims-version';
import { TabsPage } from '../pages/tabs/tabs';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { File } from '@ionic-native/file';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'f231fdcf'
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    ImsVersionPage,
    TabsPage,
    GalleryPage  
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    ImsVersionPage,
    TabsPage,
    GalleryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService, ImsService,File, LocalStorage, Transfer, ]
})
export class AppModule {}
