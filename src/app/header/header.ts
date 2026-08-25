import { Component, OnDestroy, OnInit } from '@angular/core';
import { count, filter, interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor() {}
}
