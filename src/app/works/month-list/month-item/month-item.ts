import { Component, Input } from '@angular/core';
import { Month } from '../../month.model';

@Component({
  selector: 'app-month-item',
  standalone: false,
  templateUrl: './month-item.html',
  styleUrl: './month-item.css',
})
export class MonthItem {
  @Input() month!: Month;
  @Input() index!: number;
}
