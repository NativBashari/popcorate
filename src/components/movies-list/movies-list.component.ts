import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @ViewChild('listContent', {read: ElementRef}) public listContent: ElementRef<any>| undefined;
  @Input() moviesList: any[] = [];
  @Input() listTitle: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  scrollLeft(){
    this.listContent!.nativeElement.scrollTo({left: (this.listContent!.nativeElement.scrollLeft -  this.listContent?.nativeElement.offsetWidth +10), behavior: 'smooth' })
  }
  scrollRight(){
    this.listContent!.nativeElement.scrollTo({left: (this.listContent!.nativeElement.scrollLeft + this.listContent?.nativeElement.offsetWidth +10), behavior: 'smooth' });
  }

}
