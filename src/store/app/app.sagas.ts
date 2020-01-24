import { all, put, takeLatest } from 'redux-saga/effects';
import { Action } from 'typescript-fsa/src';

import { initializeApplication } from '@Store/app/app.actions';
import { openHomeScreen } from '@Store/navigation/navigation.actions';

import { ActionErrorType } from '@Utils/types';

export function* onInitializeApplication() {
  yield put(openHomeScreen({}));
}

export function* onErrorActionOccurred(action: Action<ActionErrorType>) {
  console.warn('ActionError', action);
}

export function* appSagas() {
  yield all([
    yield takeLatest(initializeApplication, onInitializeApplication),
    yield takeLatest(action => /_FAILED/.test(action.type), onErrorActionOccurred),
  ]);
}
