import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TmdbService } from './../../services/tmdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [`
    .card-margin{
      margin-bottom: 20px;
    }
    .card-shadow{
      box-shadow: 0 2px 2px rgba(0,0,0,0.24), 0 0 2px rgba(0,0,0,0.12);
      transition: box-shadow .5s;
    }
    @media (min-width: 1450px) {
      .card-columns {
        column-count: 4;
      }
    }
  `]
})
export class SearchComponent implements OnInit {

  private buscar: string;
  private peliculas: object[] = [];

  private loading: boolean = true;
  
  buscar_form: FormGroup;

  constructor(private _activatedRoute: ActivatedRoute, private _tmdbService: TmdbService, private _router: Router) {

    this.peliculas = [];

    this.buscar_form = new FormGroup({
      buscar_input: new FormControl(this.buscar, Validators.required)
    });

    this._activatedRoute.params.subscribe(
      params => {
        // console.log(params.buscar);
        this.buscar = params.buscar;
        if (this.buscar) {
          this.buscar_form.reset({buscar_input: this.buscar});
          this._tmdbService.buscar_pelicula(this.buscar)
            .subscribe(data => {
              this.peliculas = data.results;
              // console.log(this.peliculas);
              this.loading = false;
            });
        }
      }
    );

  }

  ngOnInit() {
  }

  buscarpelicula() {
    if (this.buscar_form.valid) {
      this._router.navigate(['/search', this.buscar_form.value.buscar_input]);
    }
  }

}
