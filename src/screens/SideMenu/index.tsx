import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import ScreenKeys from '../config/constants';
const { home, stackId, leftButton } = ScreenKeys;
import {Navigation} from 'react-native-navigation';

interface ButtonConfigType {
    title: string;
    key: string;
};

const ButtonConfig: Array<ButtonConfigType> = [
    { title: "HomeScreen", key: home},
    { title: "HomeScreen", key: home},
    { title: "HomeScreen", key: home},
]

const SideScreen = () => {
    const navigate = key => {
        console.log(key, "navigate krw")
        Navigation.setStackRoot(stackId, {
            component: {
              name: key,
              options: {
                topBar: {
                    leftButtons: [
                      {
                        id: leftButton,
                        icon: require('../../assets/icons/menu.png'),
                      },
                    ],
                    title: {
                      text: "Home Screen",
                    },
                  },
                sideMenu: {
                  left: {
                    visible: false
                  }
                }
              }
            }
          });
    }
    const renderNavigationButtons = () => {
        return ButtonConfig.map(({title, key}) => (
            <TouchableOpacity onPress={() => navigate(key)} style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        ));
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                {renderNavigationButtons()}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'stretch',
        flex: 1,
        backgroundColor: '#F5F4EF',
    },
    contentContainer: {
        paddingLeft: 24,
        paddingRight: '40%'
    },
    button: {
        padding: 15,
        backgroundColor: '#7041EE',
        marginVertical: 10,
        borderRadius: 10
    }
});

export default SideScreen;
