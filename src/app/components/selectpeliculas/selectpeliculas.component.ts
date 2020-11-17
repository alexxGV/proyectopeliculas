import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PeliculaService } from './../../services/pelicula.service';
import { Generos } from './../../models/generos'

@Component({
  selector: 'app-selectpeliculas',
  templateUrl: './selectpeliculas.component.html',
  styleUrls: ['./selectpeliculas.component.css'],
  providers: [PeliculaService]
})
export class SelectpeliculasComponent implements OnInit {

  public generos: Array<Generos>;
  @ViewChild("selectgenero") selectgenero: ElementRef;

  constructor(private _service: PeliculaService) {
    this.generos = [];
    this.selectgenero = ElementRef.prototype;
  }

  ngOnInit(): void {
    this._service.getGeneros().subscribe(res => {
      this.generos = res;
      console.log(this.generos);
    });
  }

  onChange() {
    var genero = this.selectgenero.nativeElement.value;
    console.log(genero);
  }

}
