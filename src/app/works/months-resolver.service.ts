import { DataStorageService } from './data-storage.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  RedirectCommand,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Month } from './month.model';
import { MonthListService } from './month-list/month-list.service';

@Injectable({ providedIn: 'root' })
export class MonthsResolverService implements Resolve<Month[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private monthListService: MonthListService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): MaybeAsync<Month[] | RedirectCommand> {
    const months = this.monthListService.getMonths();
    if (months.length === 0) {
      return this.dataStorageService.fetchMonths();
    } else {
      return months;
    }
  }
}
