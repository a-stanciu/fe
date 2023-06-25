import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  baseUrl: string = 'http://localhost:8080/api/category';

  constructor(private httpService: HttpClient) {}

  public get(id: number): Observable<any> {
    return this.httpService.get<any>(`${this.baseUrl}/get/${id}`);
  }

  public getAll(): Observable<any[]> {
    return this.httpService.get<any[]>(`${this.baseUrl}/getAll`);
  }
}
