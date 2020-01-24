import { ActionCreator } from 'typescript-fsa/src/index';

import { PayloadWithPromises } from '@Utils/types';

export declare type MinimalAction = {
  type: string;
};

export declare type Action = {
  payload: any;
  type: string;
  error?: any;
  meta?: {
    schema: any;
  };
};

export const createReducer = (initialState: any, handlers: {[index: string]:any}, resetActions: string[] = []) =>
    (state = initialState, actionC: MinimalAction | Action) => {
      if (Object.prototype.hasOwnProperty.call(handlers, actionC.type)) {
        return handlers[ actionC.type ](state, actionC);
      }
      if (resetActions && resetActions.includes(actionC.type)) {
        return initialState;
      }
      return state;
    };

export const initSagas = (sagas: any, sagaMiddleware: any): void => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};

export function bindActionToPromise<Payload>(
  dispatch: any,
  actionCreator: ActionCreator<Payload & PayloadWithPromises>) : (p:Payload) => any {
  return (payload: Payload) => {
    return new Promise((resolve, reject) => dispatch(actionCreator({ ...payload, resolve, reject })));
  };
}
