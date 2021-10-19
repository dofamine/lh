import { Action, createReducer } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store/src/models';

export const APPLICATION_STATE_KEY = 'application';

export interface IApplicationState {
  paused: boolean;
}

const initialState = {} as IApplicationState;

const _applicationReducer: ActionReducer<IApplicationState> = createReducer<IApplicationState>(initialState);

export const applicationReducer = (state: IApplicationState | undefined, action: Action): IApplicationState =>
  _applicationReducer(state, action);
