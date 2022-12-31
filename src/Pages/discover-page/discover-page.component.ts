import { Component, OnInit } from '@angular/core';
import DiscoverList from 'src/Services/DiscoverList.service';

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
  constructor(private discoverList: DiscoverList) { }

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
  

  }


}
