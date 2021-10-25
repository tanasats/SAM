import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
//const endpoint = 'http://localhost:3000/api/v1/upload';
const endpoint = 'http://localhost:4000/upload-avatar'

@Injectable({
  providedIn: 'root'
})


export class FileUploadService {
  

  constructor(private http: HttpClient) {}

  get httpOptions() {
    let token = localStorage.getItem('access-token') || '';
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache',
        'x-access-token': token,
      }),
    };
  }

  private handleError(error: HttpErrorResponse) {
    //console.log('this is pipe(catchError()) in user.service-->');
    //console.log(error);
    switch (error.status) {
      case 0:
        return throwError('Out of service');
        break;
      case 400:
        return throwError(error.error);
        break;
      default:
        return throwError(error);
    }
  }
 


  upload(file: File): Observable<any> {
    var formData: any = new FormData();
    //formData.append("name", name);
    formData.append("avatar", file);
    console.log (file);
    return this.http
      .post<any>(endpoint, formData, this.httpOptions)
      .pipe(catchError(this.handleError));
  }







  //getFiles(): Observable<any> {
  //  return this.http.get(`${this.baseUrl}/files`);
  //}
}
