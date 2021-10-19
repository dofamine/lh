import { ActionReducerMap } from '@ngrx/store';
import { APPLICATION_STATE_KEY, applicationReducer, IApplicationState } from './application.reducer';
import { DEFAULT_ROUTER_FEATURENAME, routerReducer } from '@ngrx/router-store';
import { RouterReducerState } from '@ngrx/router-store/src/reducer';

export interface IRootState {
  [APPLICATION_STATE_KEY]: IApplicationState;
  [DEFAULT_ROUTER_FEATURENAME]: RouterReducerState;
}

const reducers: ActionReducerMap<IRootState> = {
  [APPLICATION_STATE_KEY]: applicationReducer,
  [DEFAULT_ROUTER_FEATURENAME]: routerReducer,
};

export const reducersFactory = (): ActionReducerMap<IRootState> => reducers;
