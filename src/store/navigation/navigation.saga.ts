import { Layout, Navigation } from 'react-native-navigation';
import { getActiveScreenId } from 'react-native-navigation-redux-integration';
import { all, put, select, takeEvery } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';

import { Screens } from '@Config/constants';

import {
  hideModal, openHomeScreen, popScreen, popToRoot,
  popToScreen, pushScreen, replaceScreen, showSuccessModal } from './navigation.actions';
import {
  PopScreenProps, PopToScreenProps,
  PushScreenProps, RequiredAddScreenProps,
  SuccessModalScreenProps } from './navigation.types';

function* onPushScreen(action: Action<PushScreenProps<{}>>) {
  const { componentId, layout } = action.payload;
  Navigation.push(componentId, layout);
}

function* onPopScreen(action: Action<PopScreenProps>) {
  const { componentId, options } = action.payload;
  Navigation.pop(componentId, options);
}

export function* onPopToScreen(action: Action<PopToScreenProps>) {
  const { componentId, options } = action.payload;
  Navigation.popTo(componentId, options);
}

function* onHideModal(action: Action<PopScreenProps>) {
  const { componentId } = action.payload;
  Navigation.dismissModal(componentId);
}

function* onPopToRoot() {
  const firstChild = yield select(state => state.navigation.root.children[ 0 ]);
  if (firstChild) {
    Navigation.popToRoot(firstChild.id);
  }
}

function* showModal(layout: Layout) {
  Navigation.showModal(layout);
}

export function* pushScreenAction(layout: Layout, toComponent?) {
  let componentId = toComponent;
  if (!componentId) {
    componentId = yield select(getActiveScreenId);
  }

  yield put(pushScreen({ layout, componentId }));
}

export function* popScreenAction(options, toComponent) {
  let componentId = toComponent;
  if (!componentId) {
    componentId = yield select(getActiveScreenId);
  }

  yield put(popScreen({ options, componentId }));
}

export function* popToScreenAction(toComponent, options?) {
  const componentId = toComponent;
  yield put(popToScreen({ componentId, options }));
}

export function* onReplaceScreen(action: Action<PushScreenProps<{}>>) {
  const { componentId, layout } = action.payload;
  Navigation.setStackRoot(componentId, layout);
}

export function* replaceScreenAction(layout: Layout) {
  const componentId = yield select(getActiveScreenId);
  yield put(replaceScreen({ componentId, layout }));
}

function* onOpenHomeScreen() {
  yield replaceScreenAction({
    component: { passProps: {}, options: {}, name: Screens.initial },
  });
}

export function* onShowSuccessModal(action: Action<RequiredAddScreenProps<SuccessModalScreenProps>>) {
  yield showModal({
    stack: {
      children: [ {
        component: {
          name: Screens.successModal,
          passProps: action.payload.passProps,
        },
      } ],
    },
  });
}

export function* navigationSaga() {
  yield all([
    yield takeEvery(openHomeScreen, onOpenHomeScreen),
    yield takeEvery(pushScreen, onPushScreen),
    yield takeEvery(popScreen, onPopScreen),
    yield takeEvery(popToRoot, onPopToRoot),
    yield takeEvery(popToScreen, onPopToScreen),
    yield takeEvery(replaceScreen, onReplaceScreen),
    yield takeEvery(hideModal, onHideModal),
    yield takeEvery(showSuccessModal, onShowSuccessModal),
  ]);
}
