import { Component, OnInit } from '@angular/core';
import { Month } from '../month.model';
import { MonthListService } from './month-list.service';

@Component({
  selector: 'app-month-list',
  standalone: false,
  templateUrl: './month-list.html',
  styleUrl: './month-list.css',
})
export class MonthList implements OnInit {
  months!: Month[];

  constructor(private monthListService: MonthListService) {}

  ngOnInit(): void {
    this.months = this.monthListService.getMonths();
  }
}
