import { Action, createReducer, on } from '@ngrx/store';
import { FILTER_ACTIONS } from './filter.actions';

export const FILTER_STATE_KEY = 'filter';

export interface IFilterState {
  sites: number[];
  accounts: number[];
  period: string;
}

const initialState: IFilterState = {
  accounts: [],
  period: '',
  sites: [],
};

const reducer = createReducer<IFilterState>(
  initialState,
  on(FILTER_ACTIONS.selectSites, (state, { sites }) => ({
    ...state,
    sites,
  })),
  on(FILTER_ACTIONS.selectAccounts, (state, { accounts }) => ({
    ...state,
    accounts,
  })),
  on(FILTER_ACTIONS.selectPeriod, (state, { period }) => ({
    ...state,
    period,
  })),
  on(FILTER_ACTIONS.updateFilters, (state, { filters }) => ({
    ...state,
    ...filters,
  })),
);

export const filterReducer = (state: IFilterState, action: Action): IFilterState => reducer(state, action);
