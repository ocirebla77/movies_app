import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode',
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = 'http://www.omdbapi.com/';
  apiKey = '444fe246'; // <-- Enter your own key here!

  constructor(private http: HttpClient) {}

  searchData(title: string, type: SearchType): Observable<any> {
    const retorno = this.http
      .get(
        `${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`
      )
      .pipe(
        // eslint-disable-next-line @typescript-eslint/dot-notation
        map((results) => results['Search'])
      );

    console.log('retorno', retorno);

    return retorno;
  }

  getDetails(id) {
    const retorno = this.http.get(
      `${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`
    );
    console.log('retorno', retorno);
    return retorno;
  }
}
