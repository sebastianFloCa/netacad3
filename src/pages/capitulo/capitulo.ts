import { Component } from '@angular/core';
//importación de componentes y controladores
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
//import {CapituloService } from '../../app/services/capitulo.service';
import {Capitulo} from '../../app/services/capitulos';

@Component({//declaración de componentes
    selector: 'page-capitulo',
    templateUrl: 'capitulo.html'
})
export class CapituloPage {//clase de lectura de capitulo
    lista : Capitulo [];
    constructor(public navCtrl: NavController) {//constructor |private servicio: CapituloService
       // this.leerCapitulo();
    }

    /*leerCapitulo(){
        this.servicio.getCapitulo()
            .subscribe(
                rs => this.lista = rs,
                er => console.log(er),
                ()=> console.log(this.lista)
            )
    }*/

}