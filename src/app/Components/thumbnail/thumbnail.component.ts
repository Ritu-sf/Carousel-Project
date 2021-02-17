import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  userImage : string;

  constructor() { }

  ngOnInit(): void {
  }

  thumbnail(imageLink)
  {
     this.userImage = imageLink;
  }

}
