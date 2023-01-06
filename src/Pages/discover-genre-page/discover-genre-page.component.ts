import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import GenresService from 'src/Services/GenresService.service';

@Component({
  selector: 'app-discover-genre-page',
  templateUrl: './discover-genre-page.component.html',
  styleUrls: ['./discover-genre-page.component.scss']
})
export class DiscoverGenrePageComponent implements OnInit {

  id: number= 0;
  moviesFromGenre: any;
  page:number= 1;
  constructor(private activateRoute: ActivatedRoute, private genreService: GenresService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.id = params['id'];

    });
    this.getData();  
  }
  getData(){
    this.genreService.getMoviesFromGerne(this.id, this.page).subscribe(res => {
      this.moviesFromGenre = res;
      console.log(this.moviesFromGenre);
    })
  }
  movePageHandler(nextOrPrev:boolean){
    nextOrPrev ? this.page++ : this.page--;
    this.getData(); 

  }

}
