import { Component } from '@angular/core';
import {Http, Headers } from '@angular/http';
import {LoginPage} from '../iniciar/iniciar';
import {RegisterPage} from '../registro/registro';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
//importación de componentes, servicios, paginas y controladores
@Component({//declaración de componentes
    selector: 'page-progress',
    templateUrl: 'progress.html'
})
export class ProgressPage { //clase de progreso

    constructor(public navCtrl: NavController, public http:Http) {//constructor

    }

    funcion1(){//funcion de logeo
        this.navCtrl.push(LoginPage);
    }
    

   funcion2(){//función de registro
        this.navCtrl.push(RegisterPage);   
    }

    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // let data=JSON.stringify({username:"sebastian"});
    // this.http.post('http://localhost/postResponse.php',data,headers)
    // .map(res => res.json())
    // .subscribe(res => {
    // alert("success "+res);
    // }, (err) => {
    // alert("failed");
    // });
    

}