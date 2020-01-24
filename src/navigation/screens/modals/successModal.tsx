import React from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { hideModal, openHomeScreen } from '@Store/navigation/navigation.actions';
import {
  PopScreenProps,
  RootScreenNavigationAction,
  SuccessModalScreenProps,
} from '@Store/navigation/navigation.types';

import { NavigationScreen } from '@Utils/types';

interface ActionProps {
  actions: {
    openHomeScreen: RootScreenNavigationAction<{}>,
    hideModal: (params: PopScreenProps) => void;
  };
}
class SuccessModal extends React.Component<SuccessModalScreenProps & ActionProps & NavigationScreen> {

  hideModal = () => {
    this.props.actions.openHomeScreen({});
    this.props.actions.hideModal({ componentId: this.props.componentId });
  }

  render() {
    return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
            <Text>
              {this.props.successMessage}
            </Text>

          <View>
            <Button title={this.props.buttonText} onPress={this.hideModal}/>
          </View>
        </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators({ openHomeScreen, hideModal }, dispatch),
});

export default connect<{}, ActionProps, {}>(null, mapDispatchToProps)(SuccessModal);
