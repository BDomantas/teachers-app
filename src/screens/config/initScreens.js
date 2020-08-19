import React from "react";
import { Navigation } from "react-native-navigation";
import screenConstants from "./constants";
import {
  withNavigationProvider,
  NavigationProvider,
} from "react-native-navigation-hooks";

import App from "../../../App";
import HomeScreen from "../Homescreen";
import SideMenusScreen from "../SideMenu";

const { index, home, sideMenu, stackId } = screenConstants;

const initScreens = () => {
  Navigation.registerComponent(index, () => App);
  Navigation.registerComponent(home, () => HomeScreen);
  Navigation.registerComponent(sideMenu, () =>
    withNavigationProvider(SideMenusScreen)
  );
};

export default initScreens;
