import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
const endpoint = 'http://localhost:3000/api/v1/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  get httpOptions() {
    let token = localStorage.getItem('access-token') || '';
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'x-access-token': token,
      }),
    };
  }

  private handleError(error: HttpErrorResponse) {
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



  login(data: any): Observable<any> {
    return this.http
      .post<any>(endpoint, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }


}
