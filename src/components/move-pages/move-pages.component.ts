import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-move-pages',
  templateUrl: './move-pages.component.html',
  styleUrls: ['./move-pages.component.scss']
})
export class MovePagesComponent implements OnInit {

  @Input() totalResults: number = 1;
  @Output() onMovePage : EventEmitter<any> = new EventEmitter<any>();
  currentMovieStart: number = 1;
  currentMovieEnd: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

  movePage(nextOrPrev: boolean){
    console.log(nextOrPrev);
   if(nextOrPrev){
    this.onMovePage.emit(true)
    this.currentMovieStart += 20
    this.currentMovieEnd +=21;
   }  

    else{
      this.onMovePage.emit(false)
      this.currentMovieStart -= 20;
      this.currentMovieEnd -=21;
    }  
  
    window.scroll({
      top:0,
      left:0,
      behavior: 'smooth'

    });
  }


}
