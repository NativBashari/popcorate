import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import MovieService from 'src/Services/MovieService.service';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss']
})
export class SearchResultsPageComponent implements OnInit {

  queryString: string ='';
  searchResults: any;
  constructor(private activatedRoute: ActivatedRoute, private moviesService: MovieService) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.queryString = params['query'];
    });
    this.moviesService.searchMovies(this.queryString).subscribe(res => {
      this.searchResults = res;
    })
  }

}
