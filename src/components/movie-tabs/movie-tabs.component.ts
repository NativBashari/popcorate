import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-tabs',
  templateUrl: './movie-tabs.component.html',
  styleUrls: ['./movie-tabs.component.scss']
})
export class MovieTabsComponent implements OnInit {

  @Input() movie: any;
  @Input() similarMovies: any;

  modifier: string = 'images';
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(modifier: string){
    this.modifier = modifier;

  }

}
