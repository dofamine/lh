import { InjectionToken } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { IRootState, reducersFactory } from './reducers/root.reducer';
import { environment } from '../../../environments/environment';

export const ROOT_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<IRootState>>('RootReducers', {
  providedIn: 'root',
  factory: reducersFactory,
});

export const metaReducers: MetaReducer<IRootState>[] = !environment.production ? [] : [];

export const runtimeChecks = {
  strictStateImmutability: true,
  strictActionImmutability: true,
  strictActionWithinNgZone: true,
  strictActionTypeUniqueness: true,
};
