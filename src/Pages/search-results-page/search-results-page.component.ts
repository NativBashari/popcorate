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
  page: number =1;
  constructor(private activatedRoute: ActivatedRoute, private moviesService: MovieService) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.queryString = params['query'];
    });
   this.getData();
  }

  getData(){
    this.moviesService.searchMovies(this.queryString, this.page).subscribe(res => {
      this.searchResults = res;
    })
  }
  movePageHandler(nextOrPrev: boolean){
    nextOrPrev ? this.page++ : this.page--;
    this.getData(); 

  }

}
