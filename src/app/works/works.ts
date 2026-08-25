import { Component, OnInit } from '@angular/core';
import { Month } from './month.model';
import { MonthListService } from './month-list/month-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  standalone: false,
  templateUrl: './works.html',
  styleUrl: './works.css',
})
export class Works implements OnInit {
  selectedMonth!: Month;

  constructor(
    private monthListService: MonthListService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const currentMonthIndex = new Date().getMonth();

    this.router.navigate(['/works', currentMonthIndex]);

    this.monthListService.monthSelected.subscribe((month: Month) => {
      this.selectedMonth = month;
    });
  }
}
