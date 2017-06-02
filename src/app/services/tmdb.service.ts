import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TmdbService {

  private API_KEY: string = '1c644f63e63f2e9433d17372c9322ca1';
  private URLMOVIEDB: string = 'https://api.themoviedb.org/3';

  constructor(private _jsonp: Jsonp) { }

  get_populares() {

    let url = `${ this.URLMOVIEDB }/discover/movie?sort_by=popularity.desc&api_key=${ this.API_KEY }&language=es&callback=JSONP_CALLBACK`;

    return this._jsonp.get( url )
      .map(data => data.json());

  }

}
