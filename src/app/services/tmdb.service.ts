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

   get_cartelera() {

    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desde_str = `${ desde.getFullYear() }-${ desde.getMonth() }-${ desde.getDay() }`;
    let hasta_str = `${ hasta.getFullYear() }-${ hasta.getMonth() + 1 }-${ hasta.getDay() }`;

    let url = `${ this.URLMOVIEDB }/discover/movie?primary_release_date.gte=${ desde_str }&primary_release_date.lte=${ hasta_str }&api_key=${ this.API_KEY }&language=es&callback=JSONP_CALLBACK`;

    return this._jsonp.get( url )
      .map(data => data.json());

  }

}
