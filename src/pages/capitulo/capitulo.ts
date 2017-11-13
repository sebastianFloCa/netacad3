import { Component } from '@angular/core';
//importación de componentes y controladores
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { CommonModule } from "@angular/common";
//import {CapituloService } from '../../app/services/capitulo.service';
//import {Capitulo} from '../../app/services/capitulos';
import { HttpProvider } from '../../providers/http/http';

@Component({//declaración de componentes
    selector: 'page-capitulo',
    templateUrl: 'capitulo.html'
})
export class CapituloPage {//clase de lectura de capitulo
    capitulos: any[];
    nombre: string= 'sebastian';
    
    constructor(public navCtrl: NavController,public http: HttpProvider) {//constructor |private servicio: CapituloService
       this.leerCapitulo();
    }

    leerCapitulo(){
        
       this.http.loadCapitulos().subscribe(res => {
        this.capitulos = res.results;
        console.log(this.capitulos)
      },
      error =>{
        console.log(error);
      });
    }

}