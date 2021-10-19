import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private readonly router: Router) {}

  navigateByAccounts(): void {
    return;
  }

  navigateBySites(): void {
    return;
  }

  navigateByPeriod(): void {
    return;
  }

  navigateByQueryParams(): void {
    return;
  }
}
