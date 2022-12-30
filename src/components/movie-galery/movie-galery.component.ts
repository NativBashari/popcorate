import { Component, Input, OnInit } from '@angular/core';
import MovieService from 'src/Services/MovieService.service';

@Component({
  selector: 'app-movie-galery',
  templateUrl: './movie-galery.component.html',
  styleUrls: ['./movie-galery.component.scss']
})
export class MovieGaleryComponent implements OnInit {

  @Input() movieId : number=0;
  movieImages: {
    id: number,
    backdrops: any[],
    logos: any[],
    posters: []
  } = {id: 0, backdrops: [], logos: [], posters: []};
  imagesUrl: string [] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovieImages(this.movieId).subscribe(res => {
      this.movieImages = res as {id: number, logos: any[], posters: [], backdrops: []};
      console.log(this.movieImages)
    },
    (error) => {
      console.log(error)
    },
    ()=> this.extractImagesUrl()  
    );
    

  }
  extractImagesUrl(){
    this.movieImages.backdrops.forEach(element => {
      this.imagesUrl.push(`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${element.file_path}`);  
    });
  }

}
