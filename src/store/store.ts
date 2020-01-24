import { navigatorMiddleware } from 'react-native-navigation-redux-integration';
import { applyMiddleware, compose, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';
import reduxSaga from 'redux-saga';

import Config from '@Config/envConfig';

import { initSagas } from '@Utils/redux';

import createRootReducer from './reducers';
import * as sagas from './sagas';

export const configureStore = () => {
  const sagaMiddleware = reduxSaga();

  const middlewares = [
    sagaMiddleware,
    reduxImmutableStateInvariant({
      ignore: [
        // https://github.com/manicantic/react-native-navigation-redux-integration/issues/3
        'navigation',
      ],
    }),
    navigatorMiddleware,
  ];
  if (Config.ENABLE_LOGGING) {
    middlewares.push(logger);
  }
  const store = createStore(
      createRootReducer() as any,
      {},
      compose(applyMiddleware(...middlewares)),
  );
  initSagas(sagas, sagaMiddleware);

  return store;
};
