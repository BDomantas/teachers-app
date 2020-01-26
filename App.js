import React, { useContext, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Button,
  TextInput
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

import { UserContext } from "./context/index";
import { Navigation } from "react-native-navigation";
import screenConstants from "./screens/constants";

const { home } = screenConstants;

const App = () => {
  const context = useContext(UserContext);

  useEffect(() => {
    if (context.token) {
      Navigation.setRoot({
        root: {
          stack: {
            children: [
              {
                component: {
                  name: home
                }
              }
            ]
          }
        }
      });
    }
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <UserContext.Provider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View>
            <TextInput
              style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <TextInput
              style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <Button title="Press me" onPress={() => {}} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </UserContext.Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

export default App;
