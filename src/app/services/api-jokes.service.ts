import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiJokesService {

  private urlApi = "https://v2.jokeapi.dev/joke/Any?lang=es";

  constructor(
    private http: HttpClient) { }
    
    public getData(): Observable<any> {
      return this.http.get<any>(this.urlApi);
    }
}
