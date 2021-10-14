import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'lease-hawk';
  date: Date | null = null;
  selectedCity: { name: string; code: string } | null = null;
  selectedCities: { name: string; code: string }[] | null = null;
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  some(): void {
    return;
  }
}
