import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgesService {

  constructor(private http: HttpClient) { }

  public getBadgesDownload(body): Promise<any> {
    const url = `${environment.getPdfsBadges}`;

    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');

    return this.http.post(url, body,  {headers, responseType: 'blob' as 'json'}).toPromise();
  };
}
