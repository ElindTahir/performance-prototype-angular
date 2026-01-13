import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../../core/models/item.model';

@Component({
  standalone: false,
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
})
export class ListItemComponent {
  @Input() item!: Item;

  constructor(private router: Router) {}

  openDetail(): void {
    this.router.navigate(['/detail', this.item.id]);
  }
}
