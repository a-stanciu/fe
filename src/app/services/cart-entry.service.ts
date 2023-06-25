import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartEntryService {
  baseUrl: string = 'http://localhost:8080/api/cartEntry';

  constructor(private httpService: HttpClient) {}

  public create(cartEntry: { cart: number; variant: number }): Observable<any> {
    const headers = {
      'content-type': 'application/json',
    };

    return this.httpService.post(`${this.baseUrl}/create`, cartEntry, {
      headers: headers,
    });
  }

  public delete(id: number): Observable<any> {
    return this.httpService.delete(`${this.baseUrl}/delete/${id}`);
  }
}
