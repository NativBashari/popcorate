import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import GenresService from 'src/Services/GenresService.service';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.scss']
})
export class GenresListComponent implements OnInit {
  genresList: any;

  constructor( private genreService: GenresService, private router: Router) { }

  ngOnInit(): void {
    this.genreService.getGenresList().subscribe(res => {
      this.genresList = res;
    })
  }
  moveToGenre(genreId: number){
    this.router.navigate(['/genre', genreId]);

  }

}
