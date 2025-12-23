import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Giveaway } from '../models/giveaway.interface';

@Injectable({
  providedIn: 'root',
})
export class GiveawayService {
  private api = 'https://www.gamerpower.com/api';

  constructor(private http: HttpClient) {}

  getGiveaways(): Observable<Giveaway[]> {
    return this.http.get<Giveaway[]>(`${this.api}/giveaways`);
  }

  getGiveawayById(id: string): Observable<Giveaway> {
    return this.http.get<Giveaway>(`${this.api}/giveaway?id=${id}`);
  }
}
