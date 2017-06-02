import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posterPath'
})
export class PosterPathPipe implements PipeTransform {

  transform(value: string): string {

    let url: string = `http://image.tmdb.org/t/p/w500${ value }`;

    return url;
  }

}
