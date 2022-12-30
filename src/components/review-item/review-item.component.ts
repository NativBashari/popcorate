import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss']
})
export class ReviewItemComponent implements OnInit {

  @Input() review: any;

  avatarUrl: string ='';
  rating: number [] =[];
 

  constructor() { }

  ngOnInit(): void {
    this.avatarUrl = `https://gravatar.com/avatar/${this.review.author_details.avatar_path}`
    this.rating= Array(this.review.author_details.rating).fill(0);
  }

}
