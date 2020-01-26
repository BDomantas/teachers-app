import React from "react";
import { Navigation } from "react-native-navigation";
import screenConstants from "./constants";

import App from "../App";
import HomeScreen from "../containers/Homescreen";

const { index, home } = screenConstants;

const initScreens = () => {
  Navigation.registerComponent(index, () => App);
  Navigation.registerComponent(home, () => HomeScreen);
};

export default initScreens;
