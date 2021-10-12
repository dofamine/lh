import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lh-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersComponent {}
