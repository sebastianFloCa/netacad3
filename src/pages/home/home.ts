import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CapituloPage} from '../capitulo/capitulo';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//importación de componentes, controladores y servicios
@Component({//declaración de componentes
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {//clase de Home

  public items : any = [];

  constructor(public navCtrl: NavController, public http   : Http) {//controlador
    

  }
  
  
  onClick(){//evento de lanzar la pagina de capitulo
    this.navCtrl.push(CapituloPage);
  }
  
/* submit() {
    var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
    var data = JSON.stringify({username: this.data.username});
    
    this.http.post(link, data)
    .subscribe(data => {
        this.data.response = data._body;
    }, error => {
        console.log("Oooops!");
  });
}   */

  
}
