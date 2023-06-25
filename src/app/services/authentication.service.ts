import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url: string = 'http://localhost:8080/api/user/authenticate';

  constructor(private http: HttpClient) {}

  authenticate(user: { username: string; password: string }): Observable<any> {
    const headers = {
      'content-type': 'application/json',
    };

    return this.http.post(this.url, user, { headers: headers });
  }

  storeToken(token: any, rememberMe: boolean) {
    if (rememberMe) {
      localStorage.setItem('jwt', token.jwt);
    } else {
      sessionStorage.setItem('jwt', token.jwt);
    }
  }

  deleteToken() {
    localStorage.removeItem('jwt');
    sessionStorage.removeItem('jwt');
  }
}
