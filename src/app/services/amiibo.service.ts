import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Amiibo } from '../models/amiibo.interface';

@Injectable({
  providedIn: 'root',
})
export class AmiiboService {
  private api = 'https://amiiboapi.com/api/amiibo';

  constructor(private http: HttpClient) {}

  getAmiibos(): Observable<Amiibo[]> {
    return this.http.get<Amiibo[]>(this.api);
  }

  getAmiiboById(id: string): Observable<Amiibo> {
    return this.http.get<Amiibo>(`${this.api}/?id=${id}`);
  }
}
