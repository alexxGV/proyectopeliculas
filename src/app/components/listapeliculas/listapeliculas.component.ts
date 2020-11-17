import { Component, OnInit } from '@angular/core';
import { PeliculaService } from './../../services/pelicula.service';
import { Pelicula } from './../../models/pelicula';

@Component({
  selector: 'app-listapeliculas',
  templateUrl: './listapeliculas.component.html',
  styleUrls: ['./listapeliculas.component.css'],
  providers: [PeliculaService]
})
export class ListapeliculasComponent implements OnInit {

  public peliculas: Array<Pelicula>;

  constructor(private _service: PeliculaService) { }

  ngOnInit(): void {
    // this._service.getPeliculas().subscribe(res => {
    //   this.peliculas = res;
    //   console.log(res);
    // });
  }

}
