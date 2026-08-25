import { MonthListService } from './../../month-list/month-list.service';
import { Component, OnInit } from '@angular/core';

import { MonthService } from '../month.service';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Work } from '../../work.model';

@Component({
  selector: 'app-month-edit',
  standalone: false,
  templateUrl: './month-edit.html',
  styleUrl: './month-edit.css',
})
export class MonthEdit implements OnInit {
  monthId!: number;
  workId!: number;
  editMode = false;
  workForm!: FormGroup;

  constructor(
    private monthService: MonthService,
    private monthListService: MonthListService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    const parentParams = this.route.parent?.snapshot.params;

    this.workId = +params['workId'];
    this.monthId = +parentParams?.['monthId'];

    this.editMode = params['workId'] !== undefined;

    this.initForm();
  }

  onSubmit() {
    if (this.editMode) {
      const work = this.monthService.getWork(this.workId);

      const updatedWork = new Work(
        work.id,
        new Date(this.workForm.value['date']),
        this.workForm.value['car'],
        this.workForm.value['regNumber'],
        this.workForm.value['description'],
        this.workForm.value['price'],
      );

      const newMonthId = updatedWork.date.getMonth();

      this.monthService.updateWork(this.workId, updatedWork);

      this.router.navigate(['/works', newMonthId]);
    } else {
      const newWork = new Work(
        this.monthListService.generateWorkId(),
        new Date(this.workForm.value['date']),
        this.workForm.value['car'],
        this.workForm.value['regNumber'],
        this.workForm.value['description'],
        this.workForm.value['price'],
      );

      this.monthService.addWork(newWork);
      this.onCancel();
    }
  }

  onCancel() {
    if (this.editMode) {
      this.router.navigate(['../../'], { relativeTo: this.route });
    } else {
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }

  private initForm() {
    let carName = '';
    let regNumber = '';
    let description = '';
    let price = 0;
    let date = new Date().toISOString().substring(0, 10);

    if (this.editMode) {
      const work = this.monthService.getWork(this.workId);

      carName = work.car;
      regNumber = work.regNumber;
      description = work.desc;
      price = work.price;
      date = work.date.toISOString().substring(0, 10);
    }

    this.workForm = new FormGroup({
      regNumber: new FormControl(regNumber, Validators.required),
      car: new FormControl(carName, Validators.required),
      description: new FormControl(description, Validators.required),
      price: new FormControl(price, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      date: new FormControl(date, Validators.required),
    });
  }
}
