import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";

const RegisterScreen: React.FC<{}> = () => {
  return (
    <View style={styles.page}>
      <SafeAreaView style={styles.container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.title}>Registracija</Text>
              <TextInput
                style={[styles.input, styles.shadow]}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoFocus
                keyboardType="email-address"
                placeholder="El. paštas"
              />
              <TextInput
                style={[styles.input, styles.shadow]}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="Slaptažodis"
              />

              <TouchableOpacity
                style={[styles.button, styles.shadow]}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Registruotis</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FAFBFD",
  },
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderRadius: 9999,
    paddingLeft: 20,
    paddingTop: 17,
    paddingBottom: 17,
    fontSize: 18,
    backgroundColor: "#fff",
    marginBottom: 17,
  },
  title: {
    fontWeight: "700",
    fontSize: 36,
    marginBottom: 22,
  },
  button: {
    borderRadius: 9999,
    backgroundColor: "#7041EE",
    width: "100%",
    alignItems: "center",
    paddingTop: 17,
    paddingBottom: 17,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  socialButtons: {
    width: "100%",
    marginTop: 30,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default RegisterScreen;
