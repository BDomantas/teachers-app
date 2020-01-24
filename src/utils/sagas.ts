import { Alert } from 'react-native';
import { call, put } from 'redux-saga/effects';
import { Action, AsyncActionCreators, Failure } from 'typescript-fsa';

import { parserResponseError } from '@Utils/errors';
import { NonFieldErrors, OptionalProps, PayloadWithParams, PayloadWithPromises } from '@Utils/types';

import { callDelete, callGet, callPatch, callPost, callUpdate } from './api';

type FormPayloadType = OptionalProps<PayloadWithParams> & PayloadWithPromises;

export function* handleFormAction<T extends FormPayloadType>(
  url: string, action: Action<T>, actionType: AsyncActionCreators<{}, any, {}>, callAction) {
  const { resolve, reject, ...payload } = action.payload;
  const request = payload._request || payload._params && {} || payload;
  try {
    const result = yield call(callAction, url, request);
    yield call(resolve, result);
    yield put(actionType.done({ result, params: action.payload }));
  } catch (e) {
    const errorData = parserResponseError<T>(e);
    yield call(reject, errorData);
    yield put(actionType.failed({ error: errorData, params: action.payload }));
  }
}

export function* handleFormUpdate(
  url: string, action: Action<any>, actionType: AsyncActionCreators<any, any, any>, caller = callUpdate) {
  yield handleFormAction(url, action, actionType, caller);
}
export function* handleFormSubmit<T extends PayloadWithPromises>(
  url: string, action: Action<T>, actionType: AsyncActionCreators<any, any, any>) {
  yield handleFormAction(url, action, actionType, callPost);
}
export function* handleFormPatch(url: string, action: Action<any>, actionType: AsyncActionCreators<any, any, any>) {
  yield handleFormAction(url, action, actionType, callPatch);
}

export function* handleFormDelete(url: string, action: Action<any>, actionType: AsyncActionCreators<{}, any, {}>) {
  yield handleFormAction(url, action, actionType, callDelete);
}

export function* callApi(url: string, action: Action<any>, actionType: AsyncActionCreators<{}, any, {}>, caller: any) {
  const { payload } = action;
  try {
    const result = yield call(caller, url, payload);
    payload.resolve && (yield call(payload.resolve, result));
    yield put(actionType.done({ result, params: payload }));
  } catch (error) {
    payload.reject && (yield call(payload.reject, error));
    yield put(actionType.failed({ error, params: payload }));
  }
}

export function* callApiGet(url: string, action: Action<any>, actionType: AsyncActionCreators<any, any, any>) {
  try {
    const result = yield call(callGet, url);
    yield put(actionType.done({ result, params: action.payload }));
  } catch (error) {
    yield put(actionType.failed({ error, params: action.payload }));
  }
}

export function* callApiPut(url: string, action: Action<any>, actionType: AsyncActionCreators<any, any, any>) {
  yield callApi(url, action, actionType, callUpdate);
}

export function* callApiPost(url: string, action: Action<any>, actionType: AsyncActionCreators<any, any, any>) {
  yield callApi(url, action, actionType, callPost);
}

export function* callApiDelete(url: string, action: Action<any>, actionType: AsyncActionCreators<any, any, any>) {
  yield callApi(url, action, actionType, callDelete);
}

export function* callApiPatch(url: string, action: Action<any>, actionType: AsyncActionCreators<any, any, any>) {
  yield callApi(url, action, actionType, callPatch);
}

export function* displayApiFailedError(action: Action<Failure<any, NonFieldErrors>>) {
  /*
    TODO:
    not always 'response' property is present in 'error' obj and throws TypeError.
    e.g. when submit validation fails.
  */
  const { non_field_errors, detail } = action.payload.error.response;
  let errorMessage: string = 'Error_Message';
  if (detail) {
    errorMessage = detail;
  } else {
    errorMessage = non_field_errors && non_field_errors.length ? non_field_errors[ 0 ] : errorMessage;
  }
  yield Alert.alert(errorMessage);
}
