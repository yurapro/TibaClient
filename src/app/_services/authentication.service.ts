import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    debugger;
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  LogIn(username: string, password: string) {

    let model = { UserName: username, Password: password }

    return this.http.post<User>(`${environment.apiUrl}/api/account`, model)
            .pipe(map(user => {
              debugger;
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              return user;
            }));
  }

  LogOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public get CurrentUserValue(): User {
    return this.currentUserSubject.value;
  }
}
