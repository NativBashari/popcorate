import { Component, Input, OnInit } from '@angular/core';
import MovieService from 'src/Services/MovieService.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class ReviewsListComponent implements OnInit {

  @Input() movieId: number = 0;
  movieReviews: any;
  constructor(private movieService: MovieService) {

   }

  ngOnInit(): void {
    this.movieService.getMovieReviews(this.movieId).subscribe(res => {
      this.movieReviews = res;
      console.log(this.movieReviews);
    })
  }

}
