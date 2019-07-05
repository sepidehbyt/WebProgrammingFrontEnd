import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HttpOptions =
{
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {
  

  constructor(private http:HttpClient) { }

  public getRestaurants(id) {
    return this.http.get<any>('http://127.0.0.1:8000/api/restaurants/'+id, HttpOptions);
  }
}
