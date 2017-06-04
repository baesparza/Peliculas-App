import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backdropPath'
})
export class BackdropPathPipe implements PipeTransform {

  transform(value: string): string {

    let url: string = `http://image.tmdb.org/t/p/w500${ value }`;

    return url;
  }

}
