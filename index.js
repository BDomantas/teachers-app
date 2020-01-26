import React from "react";
import { Navigation } from "react-native-navigation";

import initScreens from "./screens/initScreens";

import screenConstants from "./screens/constants";
const { index } = screenConstants;

initScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: index
            }
          }
        ]
      }
    }
  });
});
