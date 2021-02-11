import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  query;
  movieList: Observable<any>;
  url = 'https://api.themoviedb.org/3/find/';
  apiKey = '87b64514ce7745884446254b0603a7dd';
  genre = {28: 'action',
    16: 'Animated',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    35: 'Comedy',
    10752: 'War',
    80: 'Crime',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Sci Fi',
    27: 'Horror',
    10770: 'TV Movie',
    53: 'Thriller',
    37: 'Western',
    12: 'Adventure'};
  private genreList: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.query = params.query;
      fetch(this.url + this.query + '?api_key=' + this.apiKey + '&language=en-US&external_source=imdb_id').then(response => response.json())
        .then(res => this.movieList = res.movie_results);
    });
  }

  // tslint:disable-next-line:typedef
  genreConverter(genreArray){
    console.log(genreArray);
    let genreResult = '';
    for (let g of genreArray){
        console.log(this.genre[g]);
        genreResult = genreResult + this.genre[g] + ", ";
    }
    console.log(genreResult);
    return genreResult.substring(0, genreResult.length - 2);
  }


  ngOnInit(): void {
  }

}
