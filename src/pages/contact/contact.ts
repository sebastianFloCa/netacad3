import { Component } from '@angular/core';
//importación de componentes y controladores
import { NavController } from 'ionic-angular';

@Component({//declaración de componentes
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {//clase de contacto

  constructor(public navCtrl: NavController) {//constructor

  }

}
