import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly endpoint = 'https://intermuniconnectbackend.onrender.com/api/v1/'

  constructor(private http: HttpClient) { }

  getAllClient(): Observable<any[]>{
    return this.http.get<any[]>(this.endpoint + 'client/getAllClients');
  }
  getAllDriver(): Observable<any[]>{
    return this.http.get<any[]>(this.endpoint + 'driver/getAllDrivers');
  }
  getAllTravel(): Observable<any[]>{
    return this.http.get<any[]>(this.endpoint + 'travel/getAllTravels');
  }
}
