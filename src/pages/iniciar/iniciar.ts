import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ExamenPage} from '../examen/examen';
import {CapituloPage} from '../capitulo/capitulo';
//importación de componentes y controladores así como páginas
@Component({//declaración de componentes
  selector: 'page-iniciar',
  templateUrl: 'iniciar.html'
})
export class LoginPage {//clase de login
    public isToggled: boolean;

    

  constructor(public navCtrl: NavController) {//constructor
        this.isToggled = false;
  }
  notify() {//notificación en consola de login
    console.log("encendido: "+ this.isToggled); 
  }
  funcion_iniciar(){//alerta de funcionamiento de toggle
      if (this.isToggled) {
          alert("funciona");
        //this.navCtrl.push(CapituloPage);
      }
      
  }
  
}