import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Favorit } from '../_models/favorit';

@Injectable({
  providedIn: 'root'
})
export class FavoritService {

  constructor(private http: HttpClient, 
              private authenticationService: AuthenticationService ) { }

  getFavorites(): Observable<Favorit[]> {
    return this.http.get<Favorit[]>(`${environment.apiUrl}/api/favorit`);
  }

  addFavorit(value: Favorit): Observable<boolean> {

    return this.http.post<boolean>(`${environment.apiUrl}/api/favorit`, value);
  }
}
