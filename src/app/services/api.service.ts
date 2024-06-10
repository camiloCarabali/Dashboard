import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly endpoint = 'https://intermuniconnectbackend.onrender.com/api/v1/';

  constructor(private http: HttpClient) {}

  token(): Observable<any> {
    const body = {
      email: 'KarenC@gmail.com',
      password: 'KarenCn1234',
    };
    return this.http
      .post<any>(
        'https://intermuniconnectbackend.onrender.com/api/v1/auth/login',
        body
      )
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.token);
        })
      );
  }

  getAllClient(): Observable<any[]> {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.get<any[]>(this.endpoint + 'client/getAllClients', {
      headers: headers,
    });
  }

  getAllDriver(): Observable<any[]> {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.get<any[]>(this.endpoint + 'driver/getAllDrivers', {
      headers: headers,
    });
  }

  getAllTravel(): Observable<any[]> {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.get<any[]>(this.endpoint + 'travel/getAllTravels', {
      headers: headers,
    });
  }
}
