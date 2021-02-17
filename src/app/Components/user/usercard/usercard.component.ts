import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {

  @Input() useName;
  @Input()  userType;
  @Input() userImageURL;
  @Output() thumbnailEmit$ = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  emitThumbnail(imgLink)
  {
     this.thumbnailEmit$.emit(imgLink);
  }

}
