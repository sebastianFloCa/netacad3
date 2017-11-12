import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
//importación de componentes principales
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'//declaración de componente de arranque
})
export class MyApp {
  rootPage = TabsPage;//definir pagina de inicio

  constructor(platform: Platform) {//constructor
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
