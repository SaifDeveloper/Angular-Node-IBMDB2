
  import { Injectable, Output, EventEmitter } from '@angular/core';
  import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
   import { catchError, map } from 'rxjs/operators';
  import { Observable, of } from 'rxjs';

  export class UserModel {
    endpoint = 'http://localhost:3000/signup';//Replace it with ur end url
    adduser_end
 
    constructor(private http: HttpClient) {
    }

    private extractData(res: Response) {
      let body = res;
      return body || { };
    }    
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    addUser(product): Observable<any> {
      this.adduser_end = this.endpoint
      console.log(product);
      return this.http.post<any>(this.endpoint, JSON.stringify(product), this.httpOptions);
    }

  }
  
 