import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: String = 'http://localhost:8080/api/product';

  constructor(private httpService: HttpClient) { }

  public get(id: number): Observable<any> {
    return this.httpService.get<any>(`${this.baseUrl}/get/${id}`);
  }

  public getAll(): Observable<any[]> {
    return this.httpService.get<any[]>(`${this.baseUrl}/getAll`);
  }

  public getByVariant(id: number): Observable<any> {
    return this.httpService.get<any>(`${this.baseUrl}/getByVariant/${id}`);
  }
}
