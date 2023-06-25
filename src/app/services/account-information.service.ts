import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountInformationService {
  private userInfo = new Subject<any>();

  constructor() {}

  sendUpdate(isLoggedIn: boolean, username: string | null, isAdmin: boolean) {
    this.userInfo.next({
      isLoggedIn: isLoggedIn,
      username: username,
      isAdmin: isAdmin,
    });
  }

  getUpdate(): Observable<any> {
    return this.userInfo.asObservable();
  }
}
