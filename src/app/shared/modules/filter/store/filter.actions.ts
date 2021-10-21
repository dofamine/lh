import { createAction, props } from '@ngrx/store';
import { IFilterState } from './filter.reducer';

const enum EFilterActions {
  SelectSites = '[Filter] Select Sites',
  SelectAccounts = '[Filter] Select Accounts',
  SelectPeriod = '[Filter] Select Period',
  UpdateFilers = '[Filter] Update Filters',
}

const selectSites = createAction(EFilterActions.SelectSites, props<{ sites: number[] }>());
const selectAccounts = createAction(EFilterActions.SelectAccounts, props<{ accounts: number[] }>());
const selectPeriod = createAction(EFilterActions.SelectPeriod, props<{ period: string }>());
const updateFilters = createAction(EFilterActions.UpdateFilers, props<{ filters: Partial<IFilterState> }>());

export const FILTER_ACTIONS = {
  selectSites,
  selectAccounts,
  selectPeriod,
  updateFilters,
};
