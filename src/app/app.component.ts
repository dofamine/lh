import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'lease-hawk';

  some(): void {
    return;
  }
}
