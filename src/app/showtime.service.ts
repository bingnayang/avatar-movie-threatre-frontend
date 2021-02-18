import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Showtime } from './class/showtime';

@Injectable({
  providedIn: 'root'
})
export class ShowtimeService {
  private baseURL = "http://localhost:8080/api/showtime";

  constructor(private httpClient: HttpClient) { }

  getShowtime(id: number): Observable<Showtime>{
    return this.httpClient.get<Showtime>(`${this.baseURL}/${id}`)
  }
}
