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
  constructor(private activateRoute: ActivatedRoute, private genreService: GenresService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.id = params['id'];

    });
    this.genreService.getMoviesFromGerne(this.id).subscribe(res => {
      this.moviesFromGenre = res;

    })
  }

}
