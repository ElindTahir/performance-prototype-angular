import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../../core/services/state.service';
import { Item } from '../../../core/models/item.model';

@Component({
  standalone: false,
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss',
})
export class DetailPageComponent implements OnInit {
  item?: Item;
  computedValue = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stateService: StateService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.stateService.items$.subscribe((items) => {
      this.item = items.find((i) => i.id === id);

      this.computedValue = this.expensiveCalculation();
    });
  }

  expensiveCalculation(): number {
    let result = 0;
    for (let i = 0; i < 1_000_000; i++) {
      result += Math.sqrt(i);
    }
    return Math.round(result);
  }

  goBack(): void {
    this.router.navigate(['/list']);
  }

  recalculate() {
    let result = 0;
    for (let i = 0; i < 1_000_000; i++) {
      result += Math.sqrt(i);
    }
    this.computedValue = Math.round(result);
  }
}
