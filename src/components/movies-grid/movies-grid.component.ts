import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit {

  @Input() moviesList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
