import { Component, OnInit } from '@angular/core';
import { TmdbService } from './../../services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .badge{
      font-size: 50%;
    }
  `]
})
export class HomeComponent implements OnInit {

  private populares: object[] = [];
  private carteleras: object[] = [];
  private populares_kids: object[] = [];

  constructor(private _tmdbService: TmdbService) {

    this._tmdbService.get_populares()
      .subscribe(data => {
        this.populares = data.results;
        this.populares = this.populares.slice(0, 9);
        // console.log(this.populares);
      });

    this._tmdbService.get_cartelera()
      .subscribe(data => {
        this.carteleras = data.results;
        this.carteleras = this.carteleras.slice(0, 9);
        // console.log(this.cartelera);
      });

    this._tmdbService.get_populares_kids()
      .subscribe(data => {
        this.populares_kids = data.results;
        this.populares_kids = this.populares_kids.slice(0, 9);
        // console.log(this.populares_kids);
      });

  }

  ngOnInit() {
  }

}
