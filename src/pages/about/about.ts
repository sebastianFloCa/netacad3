import { Component } from '@angular/core';
import {ExamenPage} from '../examen/examen';
import { NavController } from 'ionic-angular';
//importación de componentes y controladores
@Component({//declaración de componentes
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {//clase e exámenes

  constructor(public navCtrl: NavController) {//controlador

  }

  onclick(){//evento que lanza la pagina de preguntas del exámen
    this.navCtrl.push(ExamenPage);
  }

}
