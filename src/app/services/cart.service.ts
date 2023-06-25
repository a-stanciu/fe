import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl: string = 'http://localhost:8080/api/cart';

  constructor(private httpService: HttpClient) {}

  public get(id: number): Observable<any> {
    return this.httpService.get<any>(`${this.baseUrl}/get/${id}`);
  }

  public getAll(): Observable<any[]> {
    return this.httpService.get<any[]>(`${this.baseUrl}/getAll`);
  }
  
  public getCurrent(): Observable<any[]> {
    return this.httpService.get<any[]>(`${this.baseUrl}/getCurrent`);
  }

  public create(cart: {orderStatus: string, user: number}): Observable<any> {
    const headers = {
      'content-type': 'application/json'
    }

    return this.httpService.post(`${this.baseUrl}/create`, cart, { 'headers': headers });
  }
}
