import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TmdbService } from './../../services/tmdb.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  pelicula: object;
  ruta: string = '';
  private loading: boolean = true;

  constructor(private _activatedRoute: ActivatedRoute, private _tmdbService: TmdbService, private _router: Router) {


    this._activatedRoute.params.subscribe(param => {
      // console.log( param );
      this.ruta = param.pagina;
      this._tmdbService.get_pelicula( param.id )
        .subscribe(data => {
          // console.log(data);
          this.pelicula = data;
          this.loading = false;
        });
    });

  }

  volver_pagina() {
    if ( this.ruta !== 'mhome') {
      // console.log('Viene de search');
      this._router.navigate(['/search', this.ruta]);
    } else {
      // console.log('Viene de home');
      this._router.navigate(['/home']);
    }
  }

  ngOnInit() {
  }

}
