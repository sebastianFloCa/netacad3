import { Component } from '@angular/core';
//importación de componentes
import { NavController } from 'ionic-angular';

@Component({//declaración de componentes
  selector: 'page-examen',
  templateUrl: 'examen.html'
})
export class ExamenPage {//clase de Examen

  constructor(public navCtrl: NavController) {//controlador

  }

}