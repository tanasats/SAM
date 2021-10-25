import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
const endpoint = 'http://localhost:3000/api/v1/activity';

@Injectable({
  providedIn: 'root'
})

export class ActivityService {
  constructor(private http: HttpClient) { }
  
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
    //console.log("isstanceof httperrorresponse=",error instanceof HttpErrorResponse);
    switch (error.status) {
      case 0:
        return throwError({'message':'Out of service'});
        break;
      case 400:
        return throwError(error.error);
        break;
      default:
        return throwError(error.error);
        //return throwError(error.statusText);
    }
  }

  getall(): Observable<any> {
    console.log('getall()');
    return this.http
      .get(endpoint + 's', this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  insert(data: any): Observable<any> {
    return this.http
      .post<any>(endpoint, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  update(data: any): Observable<any> {
    return this.http
      .put(endpoint+'/'+data.id, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }  

  delete(id:any): Observable<any>{
    return this.http
    .delete(endpoint+'/'+id,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  findById(id:any) : Observable<any>{
    return this.http
      .get(endpoint+'/'+id,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  upload(data: any): Observable<any> {
    console.log(data);
    var formData: any = new FormData();
    formData.append("name", data.name);
    formData.append("avatar", data.avatar);  //field name of File input data
    console.log(formData)

    return this.http
    .post<any>(endpoint+'/picture-upload', formData,
      //.post<any>('http://localhost:4000/upload-avatar', formData,
      {headers: new HttpHeaders({
          //'Content-Type': 'multipart/form-data; charset=utf-8',
          'Cache-Control': 'no-cache',
          'x-access-token': '',})
        })
      .pipe(catchError(this.handleError));
  }



}//----class----