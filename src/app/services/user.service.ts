import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'http://localhost:8080/api/user';

  constructor(private httpService: HttpClient) {}

  public get(id: number): Observable<any> {
    return this.httpService.get<any>(`${this.baseUrl}/get/${id}`);
  }

  public getAll(): Observable<any[]> {
    return this.httpService.get<any[]>(`${this.baseUrl}/getAll`);
  }

  public findCurrent(): Observable<any> {
    return this.httpService.get<any>(`${this.baseUrl}/findCurrent`);
  }

  public update(user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    defaultDeliveryAddress: string;
    defaultBillingAddress: string;
  }): Observable<any> {
    const headers = {
      'content-type': 'application/json',
    };

    return this.httpService.put(`${this.baseUrl}/update/${user.id}`, user, {
      headers: headers,
    });
  }
}
