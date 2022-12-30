import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import MovieService from 'src/Services/MovieService.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input()  movieId: number = 0;
  movie: any;
  movieBackdropPath: string = "";
  mouseIsHover: boolean = false;
  constructor(private movieService: MovieService,private router: Router) { }

  ngOnInit(): void {
    this.movieService.getById(this.movieId).subscribe(res =>{
      this.movie = res
      this.movieBackdropPath = `https://www.themoviedb.org/t/p/w533_and_h300_bestv2${this.movie.poster_path}`
    }
    );

  }
  updateUrl(event: Event){
    (event.target as HTMLImageElement).src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSROxdqcF6F-dngsRT-lYEA46xmPbXSFFd1FQ&usqp=CAU'
  }

  mouseHover(){
    this.mouseIsHover = true;
  }
  mouseLeave(){
    this.mouseIsHover = false;
  }
  moveToMovieDetails(){
    this.router.navigate(['/movie', this.movie.id]);
  }
}
