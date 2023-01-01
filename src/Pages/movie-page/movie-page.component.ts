import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import MovieService from 'src/Services/MovieService.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {

  id: number = 0;
  movie: any;
  similarMovies: any;
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })

    this.movieService.getById(this.id).subscribe(res => {
      this.movie = res;
    })
    this.movieService.getSimilarMovies(this.id).subscribe(res =>{
      this.similarMovies = res;
    })
  }

}
