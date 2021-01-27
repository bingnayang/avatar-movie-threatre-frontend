import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodDrink } from './class/food-drink';

@Injectable({
  providedIn: 'root'
})
export class FoodDrinkService {
  private baseURL = "http://localhost:8080/api/food-drink";

  constructor(private httpClient: HttpClient) { }

  getFoodDrinkList(): Observable<FoodDrink[]>{
    return this.httpClient.get<FoodDrink[]>(`${this.baseURL}`);
  }
}
