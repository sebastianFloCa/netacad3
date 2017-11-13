import {Injectable} from  '@/angular/core' ;
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Capitulo} from './capitulos';
import { Observable } from 'rxjs/Observable';

export class CapituloService{
    private headers = new Headers({'Content-Type': 'application/json' });
    private url = 'http://localhost:8000/capitulo';

    constructor(private http: Http){

    }

    getCapitulo():Observable<Capitulo[]> {

        let url = `${this.url}`;
        return this.http.get(url)
            .map(r => r.json());

    }

    /*private handelError(error: Response | any){
        let errMsg: String; 
        if(error instanceof Response){
            let body = error.json() || '';
            let err = body || JSON.stringify(body);
            errMsg= `${error.status} - ${error.statusText || ''} ${err}`;
        }else{
            errMsg = error.mesagge ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }*/
}
