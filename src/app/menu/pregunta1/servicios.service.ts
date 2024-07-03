import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { personaje } from './personaje';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getHumanCharacters(): Observable<personaje[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.results.filter((character: any) => character.species === 'Human'))
    );
  }
}
