import { Component, OnDestroy, OnInit } from '@angular/core';
import { count, filter, interval, map, Observable, Subscription } from 'rxjs';
import { DataStorageService } from '../works/data-storage.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeMonths();
  }

  onFetchData() {
    this.dataStorageService.fetchMonths().subscribe();
  }
}
