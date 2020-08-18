import React, { useContext, useEffect, useState, useCallback } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

import { UserContext } from "./src/context/index";
import { Navigation } from "react-native-navigation";
import screenConstants from "./src/screens/config/constants";
import Button from "./src/components/Button";
import LoginScreen from "./src/screens/LoginScreen";
const { home, index, sideMenu, leftButton, stackId } = screenConstants;

const App = ({ componentId }) => {
  const context = useContext(UserContext);
  console.log("COMPONENT ID", componentId);
  useEffect(() => {
    if (context.token) {
      Navigation.setRoot({
        root: {
          sideMenu: {
            center: {
              stack: {
                id: stackId,
                children: [
                  {
                    component: {
                      name: home,
                      options: {
                        topBar: {
                          leftButtons: [
                            {
                              id: leftButton,
                              icon: require("./src/assets/icons/menu.png"),
                            },
                          ],
                          title: {
                            text: "Home Screen",
                          },
                        },
                      },
                    },
                  },
                ],
              },
            },
            left: {
              component: {
                name: sideMenu,
              },
            },
          },
        },
      });
    }
    Navigation.events().registerNavigationButtonPressedListener(
      ({ buttonId, componentId }) => {
        if (buttonId === leftButton) {
          Navigation.mergeOptions(componentId, {
            sideMenu: {
              left: {
                visible: true,
              },
            },
          });
        }
      }
    );
  }, []);

  return <LoginScreen />;

  return (
    <UserContext.Provider>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.heading}>Sveiki!</Text>
          <Text style={styles.subtitle}>vieta kur išmokstama</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} title="Pradėti" onPress={() => {}} />
          <Button
            style={styles.button}
            secondary
            title="Prisijungti"
            onPress={() => {}}
          />
          <View style={styles.signUpTextContainer}>
            <Text>Naujokas ? </Text>
            <Text style={styles.signUpText}>Registruotis!</Text>
          </View>
        </View>
      </SafeAreaView>
    </UserContext.Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  signUpText: {
    color: "#7041EE",
  },
  signUpTextContainer: {
    flexDirection: "row",
    flex: 1,
    alignSelf: "center",
    paddingTop: 30,
    paddingBottom: 40,
  },
  titleContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 35,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 10,
  },
  heading: {
    fontSize: 62,
    color: "#7041EE",
  },
  subtitle: {
    color: "#2C2929",
    fontSize: 20,
    paddingVertical: 8,
  },
  button: {
    marginVertical: 8,
  },
});

export default App;
