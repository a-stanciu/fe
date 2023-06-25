import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url: string = 'http://localhost:8080/api/user/create';

  constructor(private http: HttpClient) { }

  register(user: { firstName: string, lastName: string, email: string, phoneNumber: string, password: string }): Observable<any> {
    const headers = {
      'content-type': 'application/json'
    }

    return this.http.post(this.url, user, { 'headers': headers });
  }
}
