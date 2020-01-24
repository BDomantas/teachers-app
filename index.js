/**
 * @format
 */
import { Navigation } from "react-native-navigation";

import initScreens from "./screens/initScreens";

import screenConstants from "./screens/constants";
const { mainScreen } = screenConstants;

initScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: mainScreen
      }
    }
  });
});
