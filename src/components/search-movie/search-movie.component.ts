import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  constructor(private router: Router) { }

  searchBoxValue: string = '';
  ngOnInit(): void {
  }
  searchMovie(){
    this.router.navigate(['searchResults', this.searchBoxValue])
  }
}
