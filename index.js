import { Navigation } from "react-native-navigation";

import initScreens from "./src/screens/config/initScreens";

import screenConstants from "./src/screens/config/constants";
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
