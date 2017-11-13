import { Component } from '@angular/core';
//declaración de componentes
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ProgressPage } from '../progress/progress';

@Component({
  templateUrl: 'tabs.html'//componentes
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;//indicadores de que pagina debe cargar cada tab
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = ProgressPage;
  constructor() {//constructor

  }
}
