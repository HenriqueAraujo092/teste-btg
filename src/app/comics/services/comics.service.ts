import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private readonly allComics = 'https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=Spider&limit=20&ts=1636041525&apikey=cea3b15b8588005735d12ae261229e66&hash=abe43179b723e88d72ebbc7019f0e430';

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  all() {
    return this.httpClient.get(this.allComics).pipe(
      delay(1000),
      catchError(this.handleError));
  }

}
