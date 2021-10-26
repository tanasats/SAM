import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MsuAuthenService {
  private endpoint = 'https://data.msu.ac.th/api/v1/auth';
  get httpOptions() {
    let token = localStorage.getItem('access-token') || '';
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Content-Type': 'multipart/form-data; charset=utf-8',
        'Cache-Control': 'no-cache',
        'x-access-token': token,
      }),
    };
  }
  private handleError(error: HttpErrorResponse) {
    console.log("isstanceof httperrorresponse=",error instanceof HttpErrorResponse);
    switch (error.status) {
      case 0:
        return throwError({'status':0,'error':'Network out of service!'});
        break;
      case 400:
        return throwError(error);
        break;
      default:
        return throwError(error);
    }
  }

  constructor(private http:HttpClient) { }

  signin(data:any) : Observable<any>{
    console.log('sign data: ',data);
    return this.http.post(this.endpoint+'/signin',data,this.httpOptions).pipe(catchError(this.handleError))
  }

  me(): Observable<any>{
    return this.http.get(this.endpoint+'/me',this.httpOptions).pipe(catchError(this.handleError))
  }






}// class
