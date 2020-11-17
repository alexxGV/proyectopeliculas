import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global';

@Injectable()
export class PeliculaService {

    public url = Global.urlPeliculas;

    constructor(private _http: HttpClient) {
    }

    getGeneros(): Observable<any> {
        var request = "/api/Generos";
        return this._http.get(this.url + request);
    }

    getPeliculasGenero(idGenero): Observable<any> {
        var request = "api/peliculasgenero/" + idGenero;
        return this._http.get(this.url + request);
    }
}