
import { Navigation } from 'react-native-navigation';
import { initNavigatorListeners } from 'react-native-navigation-redux-integration';
import { noTopBar } from "./src/utils/navigation";
import { Screens } from '@Config/constants';
import { Provider } from 'react-redux';

import { registerScreens } from '@Navigation/screens';
import { configureStore } from '@Store/store';


const store = configureStore();
registerScreens(store, Provider);
initNavigatorListeners(Navigation, store);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({});
    Navigation.setRoot({
      root: {
        stack: {
          children: [ {
            component: {
              name: Screens.initial,
              options: noTopBar
            },
          } ]
        }
      },
    });
  });
  