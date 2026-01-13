import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from '../../../core/models/item.model';
import { StateService } from '../../../core/services/state.service';

@Component({
  standalone: false,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items$!: Observable<Item[]>;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.items$ = this.stateService.visibleItems$;
  }
}
