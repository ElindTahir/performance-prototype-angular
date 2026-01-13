import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly itemsSubject = new BehaviorSubject<Item[]>([]);
  items$ = this.itemsSubject.asObservable();

  private readonly filterSubject = new BehaviorSubject<string>('');
  filter$ = this.filterSubject.asObservable();

  private readonly sortSubject = new BehaviorSubject<'name' | 'value'>('name');
  sort$ = this.sortSubject.asObservable();

  readonly visibleItems$ = combineLatest([
    this.items$,
    this.filter$,
    this.sort$,
  ]).pipe(
    map(([items, filter, sort]) => {
      let result = [...items];

      if (filter) {
        result = result.filter((item) =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        );
      }

      result.sort((a, b) => {
        switch (sort) {
          case 'name':
            return a.id - b.id;
          case 'value':
            return a.value - b.value;
          default:
            return 0;
        }
      });

      return result;
    })
  );

  setItems(items: Item[]): void {
    this.itemsSubject.next(items);
  }

  setFilter(filter: string): void {
    this.filterSubject.next(filter);
  }

  setSort(sort: 'name' | 'value'): void {
    this.sortSubject.next(sort);
  }
}
