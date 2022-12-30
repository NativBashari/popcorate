import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import DiscoverList from 'src/Services/DiscoverList.service';
import GenresService from 'src/Services/GenresService.service';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.scss']
})
export class DiscoverPageComponent implements OnInit {
  popularMovies: any;
  topRatedMovies: any;
  kidsMovies: any;
  moviesReleasedThisYear: any;
  genresList: any;
  constructor(private discoverList: DiscoverList, private genreService: GenresService, private router: Router) { }

  ngOnInit(): void {
   this.getData();
  }

  getData(){
    this.discoverList.getMostPopular().subscribe(res => {
      this.popularMovies = res;
    })
    this.discoverList.getHighestRated().subscribe(res => {
      this.topRatedMovies = res;
    })  
    this.discoverList.getKidsMovies().subscribe(res => {
      this.kidsMovies = res;
    })
    this.discoverList.getMoviesReleasedThisYear().subscribe(res => {
      this.moviesReleasedThisYear = res;
    })
    this.genreService.getGenresList().subscribe(res => {
      this.genresList = res;
    })

  }

  moveToGenre(genreId: number){
    this.router.navigate(['/genre', genreId]);

  }
}
