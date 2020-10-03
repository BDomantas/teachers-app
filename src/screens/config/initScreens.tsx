import { Navigation } from "react-native-navigation";
import screenConstants from "./constants";
import {
  withNavigationProvider,
} from "react-native-navigation-hooks";

import App from "@Root/App";
import HomeScreen from "@Screens/Homescreen";
import SideMenusScreen from "@Screens/SideMenu";

const { index, home, sideMenu } = screenConstants;

const initScreens = () => {
  Navigation.registerComponent(index, () => App);
  Navigation.registerComponent(home, () => HomeScreen);
  Navigation.registerComponent(sideMenu, () =>
    withNavigationProvider(SideMenusScreen)
  );
};

export default initScreens;
