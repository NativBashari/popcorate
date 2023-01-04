import { LiteralArray } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-movie-tabs',
  templateUrl: './movie-tabs.component.html',
  styleUrls: ['./movie-tabs.component.scss']
})
export class MovieTabsComponent implements OnInit {

  @Input() movie: any;
  @Input() similarMovies: any;

  @ViewChild('ul', {read: ElementRef}) public ulContent: ElementRef<any>| undefined;

  modifier: string = 'images';
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(modifier: string){
    this.modifier = modifier;
    let li: HTMLElement[] = this.ulContent?.nativeElement.querySelectorAll('li');
    li.forEach(element => {
    element.classList.remove('active');
    });   
    this.ulContent?.nativeElement.querySelector("#"+modifier).classList.add('active');
  }

}
