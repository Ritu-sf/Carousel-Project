import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor(private httpClient: HttpClient) { }

  async getUserInformation() {

  let temp :any = [];
    const res:any =  await this.httpClient
    .get('https://api.github.com/users',
    { observe: 'response' })
    .toPromise();
    return temp = res;
  }
  
}
