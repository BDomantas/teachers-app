import { Navigation } from "react-native-navigation";
import screenConstants from "./constants";
import App from "../App";

const { mainScreen } = screenConstants;

const initScreens = () => {
  Navigation.registerComponent(mainScreen, () => App);
};

export default initScreens;
