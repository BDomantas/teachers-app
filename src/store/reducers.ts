import { reducer as navigationReducer } from 'react-native-navigation-redux-integration';
import { combineReducers } from 'redux';
import { Action } from 'typescript-fsa';

import appReducer, { AppState } from '@Store/app/app.reducer';

export interface RootState {
  app: AppState;
  navigation: any;
}

const rootReducer = () => combineReducers({
  app: appReducer,
  navigation: navigationReducer,
});

export default () => {
  return (state: RootState, action: Action<any>):any => {
    const reducer = rootReducer();
    return reducer(state, action);
  };
};
