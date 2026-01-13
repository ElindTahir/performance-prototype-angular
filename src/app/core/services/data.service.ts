import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly dataUrl = 'data/items.json';

  constructor(private http: HttpClient) {}

  loadItems(size: 100 | 1000 | 10000 = 100): Observable<Item[]> {
    return this.http.get<Item[]>(`data/items-${size}.json`).pipe(delay(300));
  }
}
