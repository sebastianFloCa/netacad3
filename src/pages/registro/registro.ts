import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ExamenPage} from '../examen/examen';
import {CapituloPage} from '../capitulo/capitulo';
//importación de componentes
@Component({//declaración de componentes
  selector: 'page-registro',
  templateUrl: 'registro.html'
})
export class RegisterPage {//clase de registro
    public isToggled: boolean;//booleanos
    public isInputDisabled:boolean;
    
        
    
      constructor(public navCtrl: NavController) {//constructor
            this.isToggled = false;
            this.isInputDisabled = false;
      }
      notify() {//notificación
        console.log("encendido: "+ this.isToggled);
        if (this.isToggled) {
            this.encendido();
        }else{
            this.apagado();
        } 
      }

      encendido(){ //funcion de encendido
        this.isInputDisabled = true;
      }
      apagado(){//funcion de apagado
        this.isInputDisabled = false;
      }
      funcion_registrar(){//funcion de registro
        alert("funciona");
        
    }
  
}