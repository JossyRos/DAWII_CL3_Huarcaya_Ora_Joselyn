import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { email } from './email';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getFilteredComments(): Observable<email[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(email => email.filter(email => email.email.includes('garfield.biz')))
    );
  }
}
