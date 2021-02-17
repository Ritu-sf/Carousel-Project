import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserModel} from './../../Model/UserModel';
import {UserDataServiceService}  from "./../../Service/user-data-service.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

currentPage : number = 0;

responseLength : number = 0;

userResponse : UserModel[];

@Output() thumbnailEmit$ = new EventEmitter<string>();


  constructor(private userInfo : UserDataServiceService) { }

  ngOnInit(): void {

    this.getUserInfo();
  }

  async getUserInfo() {
    const res: any = await this.userInfo.getUserInformation();
    this.userResponse = res.body;
    this.responseLength = this.userResponse.length;
  }

  emitThumbnail(imgLink)
  {
     this.thumbnailEmit$.emit(imgLink);
  }
 

  nextPagination()
  {

    this.currentPage = (this.currentPage+3 < this.responseLength ? (this.currentPage + 3 ): (this.responseLength-this.currentPage)) ;
    
  }

  previousPagination()
  {
    this.currentPage = (this.currentPage-3 > 0? (this.currentPage - 3 ): (this.currentPage)) ;
   
  }

}
