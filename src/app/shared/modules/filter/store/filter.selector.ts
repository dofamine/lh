import { createFeatureSelector } from '@ngrx/store';
import { FILTER_STATE_KEY, IFilterState } from './filter.reducer';

export const filterSelector = createFeatureSelector<IFilterState>(FILTER_STATE_KEY);
