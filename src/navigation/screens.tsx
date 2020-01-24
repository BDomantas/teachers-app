import { Navigation } from 'react-native-navigation';

import { Screens } from '@Config/constants';

import { createAppWithStore } from '@Utils/navigation';

import InitializeScreen from './screens/initial';
import SuccessModal from './screens/modals/successModal';

export function registerScreens(store, Provider) {
  Navigation.registerComponent(Screens.initial, () => createAppWithStore(store, Provider, InitializeScreen));
  Navigation.registerComponent(Screens.successModal, () => createAppWithStore(store, Provider, SuccessModal));
}
