import { InjectionToken } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { IRootState, reducersFactory } from './reducers/root.reducer';
import { ActionReducer } from '@ngrx/store/src/models';
import { localStorageSync } from 'ngrx-store-localstorage';
import { APPLICATION_STATE_KEY } from './reducers/application.reducer';
import { FILTER_STATE_KEY } from '../../shared/modules/filter/store/filter.reducer';

export const ROOT_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<IRootState>>('RootReducers', {
  providedIn: 'root',
  factory: reducersFactory,
});

export const metaReducers: MetaReducer<IRootState>[] = [localStorageSyncReducer];

export const runtimeChecks = {
  strictStateImmutability: true,
  strictActionImmutability: true,
  strictActionWithinNgZone: true,
  strictActionTypeUniqueness: true,
};

export function localStorageSyncReducer(reducer: ActionReducer<IRootState>): ActionReducer<IRootState> {
  return localStorageSync({
    keys: [APPLICATION_STATE_KEY, FILTER_STATE_KEY],
    rehydrate: true,
    storage: localStorage,
    removeOnUndefined: true,
  })(reducer);
}
