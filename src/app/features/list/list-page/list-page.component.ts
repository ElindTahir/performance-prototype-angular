import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { StateService } from '../../../core/services/state.service';

@Component({
  standalone: false,
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss',
})
export class ListPageComponent implements OnInit {
  loading = true;

  constructor(
    private dataService: DataService,
    public stateService: StateService,
  ) {}

  ngOnInit(): void {
    this.dataService.loadItems(100).subscribe((items) => {
      this.stateService.setItems(items);
      this.loading = false;
    });
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.stateService.setFilter(value);
  }

  onSort(event: Event): void {
    const value = (event.target as HTMLSelectElement).value as 'name' | 'value';
    this.stateService.setSort(value);
  }
}
