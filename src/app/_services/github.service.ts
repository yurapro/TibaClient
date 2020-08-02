import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitHubRoot } from '../_models/git-hub';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http : HttpClient) { }

  getRepositories(quary: string): Observable<GitHubRoot> {
    return this.http.get<GitHubRoot>(`${environment.apiUrl}/api/github/`+ quary);
  }
}
