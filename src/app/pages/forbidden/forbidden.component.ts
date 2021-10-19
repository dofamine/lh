import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lh-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForbiddenComponent {}
