import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MonthListService } from './month-list/month-list.service';
import { MonthService } from './month-details/month.service';
import { Month } from './month.model';
import { map, tap } from 'rxjs';
import { Work } from './work.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private monthListService: MonthListService,
    private monthService: MonthService,
  ) {}

  storeMonths() {
    const months = this.monthListService.getMonths();

    this.http
      .put(
        'https://motor-money-backend-default-rtdb.europe-west1.firebasedatabase.app/months.json',
        months,
      )
      .subscribe((response) => {});
  }

  fetchMonths() {
    return this.http
      .get<
        Month[]
      >('https://motor-money-backend-default-rtdb.europe-west1.firebasedatabase.app/months.json')
      .pipe(
        map((months) => {
          return months.map((month) => {
            return new Month(
              month.title,
              month.works
                ? month.works.map((work) => {
                    return new Work(
                      work.id,
                      new Date(work.date),
                      work.car,
                      work.regNumber,
                      work.desc,
                      work.price,
                    );
                  })
                : [],
            );
          });
        }),
        tap((months) => {
          this.monthListService.setMonths(months);
        }),
      );
  }
}
