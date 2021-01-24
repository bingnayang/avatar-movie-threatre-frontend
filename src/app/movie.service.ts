import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './class/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseURL = "http://localhost:8080/api/movies";

  constructor(private httpClient: HttpClient) { }

  getPlayingMovieList(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(`${this.baseURL}`);
  }
}
