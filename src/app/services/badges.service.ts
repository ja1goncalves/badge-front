import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgesService {

  constructor(private http: HttpClient) { }

  getBadgesDownload(body): Observable<JSON> {
    const url = `${environment.getPdfsBadges}`;
    return this.http.post<JSON>(url, body);
  };
}
