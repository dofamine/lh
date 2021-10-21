import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FiltersPresenter } from './filters.presenter';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IFilterState } from './store/filter.reducer';

@Component({
  selector: 'lh-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  viewProviders: [FiltersPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  form: FormGroup = this.presenter.form as FormGroup;
  filterState$: Observable<IFilterState> = this.presenter.filterState$;
  hasUnsavedChanges$: Observable<boolean> = this.presenter.hasUnsavedChanges$ as Observable<boolean>;

  constructor(private readonly presenter: FiltersPresenter) {}

  periods = [
    { name: 'Yesterday', value: 1 },
    { name: 'Last 30 days', value: 2 },
    { name: 'Last 60 days', value: 3 },
    { name: 'Last 90 days', value: 4 },
  ];
  accounts = [
    { name: 'Account 1', value: 1 },
    { name: 'Account 2', value: 2 },
    { name: 'Account 3', value: 3 },
    { name: 'Account 4', value: 4 },
  ];
  sites = [
    { name: 'Site 1', value: 1 },
    { name: 'Site 2', value: 2 },
    { name: 'Site 3', value: 3 },
    { name: 'Site 4', value: 4 },
  ];

  onFilter(): void {
    this.presenter.onFiltersUpdate();
  }
}
