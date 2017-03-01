import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ImsVersionPage } from '../ims-version/ims-version';
import { GalleryPage } from '../gallery/gallery';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = ImsVersionPage;
  tab5Root: any = GalleryPage;
  constructor() {

  }
}
