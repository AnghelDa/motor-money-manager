import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Month } from '../month.model';
import { Work } from '../work.model';

import { MonthService } from './month.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MonthListService } from '../month-list/month-list.service';

@Component({
  selector: 'app-month-details',
  standalone: false,
  templateUrl: './month-details.html',
  styleUrl: './month-details.css',
})
export class MonthDetails implements OnInit {
  showEdit = false;
  month!: Month;
  monthId!: number;

  works: Work[] = [];

  constructor(
    private monthService: MonthService,
    private monthListService: MonthListService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.monthId = +params['monthId'];
      this.month = this.monthListService.getMonth(this.monthId);
      this.monthService.setMonth(this.month);
      this.works = this.monthService.getWorks();
    });
  }

  onNewWork() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
