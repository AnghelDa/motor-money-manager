import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Work } from '../../work.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MonthService } from '../month.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work-list',
  standalone: false,
  templateUrl: './work-list.html',
  styleUrl: './work-list.css',
})
export class WorkList implements OnInit, OnDestroy {
  @Input() works: Work[] = [];
  workId!: number;
  worksChangeSub!: Subscription;

  constructor(
    private monthService: MonthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.worksChangeSub = this.monthService.worksChanged.subscribe((works) => {
      this.works = works;
    });
  }
  onEditWork(workId: number) {
    this.router.navigate([workId, 'edit'], { relativeTo: this.route });
  }

  onDeleteWork(workId: number) {
    this.monthService.deleteWork(workId);
  }

  ngOnDestroy(): void {
    this.worksChangeSub.unsubscribe();
  }
}
