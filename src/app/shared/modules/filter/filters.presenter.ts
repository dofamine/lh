import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IFilterState } from './store/filter.reducer';
import { filterSelector } from './store/filter.selector';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { FILTER_ACTIONS } from './store/filter.actions';
import { FormState } from '../../../core/classes/form-state';

@Injectable()
export class FiltersPresenter extends FormState {
  readonly filterState$: Observable<IFilterState> = this.store
    .select(filterSelector)
    .pipe(tap((data) => this.patchFormValue(data)));

  constructor(private readonly store: Store, private readonly fb: FormBuilder) {
    super();
    this.form = this.getForm();
  }

  getForm(): FormGroup {
    return this.fb.group({
      sites: this.fb.control([]),
      accounts: this.fb.control([]),
      period: this.fb.control(''),
    });
  }

  onFiltersUpdate(): void {
    this.store.dispatch(FILTER_ACTIONS.updateFilters({ filters: this.form?.getRawValue() as Partial<IFilterState> }));
  }
}
