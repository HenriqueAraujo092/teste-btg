import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap, map, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private readonly API = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Spider&ts=1636041525&apikey=cea3b15b8588005735d12ae261229e66&hash=abe43179b723e88d72ebbc7019f0e430';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get(this.API).pipe(
      take(1),
      tap(characters => console.log(characters))
    );

  }
}
