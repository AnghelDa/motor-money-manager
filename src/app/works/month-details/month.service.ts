import { Injectable } from '@angular/core';
import { Month } from '../month.model';

import { Work } from '../work.model';
import { Subject } from 'rxjs';
import { MonthListService } from '../month-list/month-list.service';

@Injectable()
export class MonthService {
  selectedMonth!: Month;

  worksChanged = new Subject<Work[]>();

  constructor(private monthListService: MonthListService) {}

  setMonth(month: Month) {
    this.selectedMonth = month;
  }

  getWorks(): Work[] {
    return this.selectedMonth.works.slice();
  }

  getWork(workId: number): Work {
    return this.selectedMonth.works.find((work) => work.id === workId)!;
  }

  addWork(work: Work) {
    this.selectedMonth.works.unshift(work);
    this.worksChanged.next(this.selectedMonth.works.slice());
  }

  updateWork(workId: number, newWork: Work) {
    const oldMonth = this.selectedMonth;
    const newMonthIndex = newWork.date.getMonth();
    const newMonth = this.monthListService.getMonth(newMonthIndex);

    const index = oldMonth.works.findIndex((work) => work.id === workId);
    if (index === -1) {
      return;
    }
    if (oldMonth === newMonth) {
      oldMonth.works[index] = newWork;
      this.worksChanged.next(this.selectedMonth.works.slice());
      return;
    }

    oldMonth.works.splice(index, 1);
    newMonth.works.unshift(newWork);

    this.worksChanged.next(oldMonth.works.slice());
  }

  deleteWork(workId: number) {
    const index = this.selectedMonth.works.findIndex((work) => work.id === workId);
    if (index !== -1) {
      this.selectedMonth.works.splice(index, 1);
      this.worksChanged.next(this.selectedMonth.works.slice());
    }
  }
}
