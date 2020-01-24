import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { Options, OptionsTopBarButton } from 'react-native-navigation';

import { TOP_BAR_BUTTON_IDS, TOP_BAR_CUSTOM_TITLE } from '@Config/constants';

import colors from '@Styles/colors';

export const createAppWithStore = (store, Provider, Component: any, ...props: any[]) => {
  class App extends React.Component {
    static options(passProps) {
      return passProps;
    }
    render() {
      return (
        <Provider store={store}>
          <Component {...{ ...this.props, ...props }} />
        </Provider>
      );
    }
  }
  App.options = Component.options;
  return App;
};

export const noTopBar: Options = {
  topBar: {
    visible: false,
    drawBehind: true,
  },
};
export const noBackOption: Options = {
  topBar: {
    backButton: {
      visible: false,
    },
  },
};

export const withBackgroundStyle = (background: any): Options => ({
  topBar: {
    background,
  },
});

export const noTransitionAnimation: Options = {
  animations: {
    push: {
      enabled: false,
    },
  },
};

export const withCustomBackButton: Options = {
  topBar: {
    backButton: {
      visible: false,
    },
    leftButtons: [
      {
        icon: require('@Images/navigationBack/navigationBack.png'),
        color: colors.default,
        id: TOP_BAR_BUTTON_IDS.CUSTOM_BACK_BUTTON,
      },
    ],
  },
};

export const withCustomRightButton = (
  { text, icon, color = colors.default, component }: Partial<OptionsTopBarButton>): Options => {
  return {
    topBar: {
      rightButtons: [ {
        text, icon, color, component,
        id: TOP_BAR_BUTTON_IDS.CUSTOM_RIGHT_BUTTON,
      } ],
    },
  };
};

export const withBigTitle = (titleText): Options => {
  return {
    topBar: {
      title: {
        text: titleText,
      },
      largeTitle: {
        visible: false,
        fontSize: 40,
        color: colors.default,
      },
    },
  };
};
export const withBigSubtitle = (subtitleText): Options => {
  return {
    topBar: {
      subtitle: {
        text: subtitleText,
        fontSize: 12,
        color: colors.default,
      },
    },
  };
};

export const withCustomTitle = (
  title: string,
  subtitle: string,
  titleStyle: StyleProp<TextStyle> = { fontSize: 21 },
  subtitleStyle: StyleProp<TextStyle> = { fontSize: 12 }): Options => (
  {
    topBar: {
      title: {
        component: {
          name: TOP_BAR_CUSTOM_TITLE,
          passProps: { title, subtitle, titleStyle, subtitleStyle },
        },
      },
    },
  });
