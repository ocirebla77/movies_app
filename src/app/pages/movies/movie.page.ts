import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService, SearchType } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  results: Observable<any>;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  searchChanged(event: any) {
    console.log('this.searchTerm,',this.searchTerm);
    console.log('event',event);
    // Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.searchTerm, this.type);
    console.log('this.results', this.results);
  }
}
