import { Action } from 'typescript-fsa';

import { initializeAppConfig } from '@Store/app/app.actions';
import { InitAppConfigPayload } from '@Store/app/app.types';

import { createReducer } from '@Utils/redux';

export type AppState = {

};

export const initialState: AppState = {

};

const appReducer = createReducer(initialState, {
  [ initializeAppConfig.type ]: (state: AppState, _action: Action<InitAppConfigPayload>) => {
    return state;
  },
});

export default appReducer;
