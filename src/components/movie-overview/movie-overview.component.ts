import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {

  @Input() movie: any;

  constructor() { }

  ngOnInit(): void {
   
  }

}
