import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtUtilService {

  constructor(private helper: JwtHelperService) { }

  getJwt(): string | null {
    let token = localStorage.getItem('jwt');

    if (!token) {
      token = sessionStorage.getItem('jwt');
    }

    return token;
  }

  getEmail(): string | null {
    let token = this.getJwt();
    let decodedToken: { [key: string]: string };

    decodedToken = jwt_decode(token as string);
    
    return decodedToken ? decodedToken['sub'] : null;
  }

  isAdmin(): boolean {
    let token = this.getJwt();
    let decodedToken: { [key: string]: string };

    decodedToken = jwt_decode(token as string);

    return decodedToken ? JSON.parse(decodedToken['admin']) : false; // converts `admin` from string to boolean
  }

  jwtExists(): boolean {
    if (!this.getJwt()) {
      return false;
    }

    return true;
  }

  isTokenExpired(): boolean {
    return this.helper.isTokenExpired(this.getJwt() as string);
  }
}
