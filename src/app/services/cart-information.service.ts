import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartInformationService {
  private cartInfo = new Subject<any>();

  constructor() {}

  sendUpdate(items: number) {
    this.cartInfo.next({
      items: items,
    });
  }

  getUpdate(): Observable<any> {
    return this.cartInfo.asObservable();
  }
}
