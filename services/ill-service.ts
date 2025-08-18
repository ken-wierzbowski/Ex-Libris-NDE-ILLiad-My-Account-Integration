import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IlliadData {
  Articles: any[];
  Requests: any[];
  data: any[];

}

export interface userData {
  userId: string;
}

@Injectable({
  providedIn: 'root',
})

export class IllService {
  constructor(private http: HttpClient) {}

  getILLiadData(url: string, user: string): Observable<IlliadData> {
    return this.http.get<IlliadData>(url, {
      params: {user},
    });
  }
}