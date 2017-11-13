import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpProvider {
  datos : any;
  path : string = 'http://localhost/coneccionNetacad3/index.php/capitulocontroller'; //  https://randomuser.me/api/?results=25
  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  loadCapitulos(){
    return this.http.get(this.path)
    .map(res => res.json(),
        err => {
          console.log(err);
        }
      )
    }

}
