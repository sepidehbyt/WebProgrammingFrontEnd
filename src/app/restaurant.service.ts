import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HttpOptions =
{
  headers: new HttpHeaders({'Content-Type': 'application/json','Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) {}

  public getRestaurants(city,area,category) {
    return this.http.post<any>('http://127.0.0.1:8000/api/restaurants', {'city' : city,'area' : area,'category' : category}, HttpOptions);
  }
}
