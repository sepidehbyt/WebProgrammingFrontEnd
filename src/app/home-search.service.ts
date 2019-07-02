import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HttpOptions =
{
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HomeSearchService {

  constructor(private http:HttpClient) {}

  public getArea(city) {
    return this.http.post<any>('http://127.0.0.1:8000/api/getarea', {'city' : city}, HttpOptions);
  }
}
