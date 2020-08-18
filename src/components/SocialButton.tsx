import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const SocialButton = ({ onPress, title, style, primary, secondary }) => (
  <TouchableOpacity
    style={[
      styles.button,
      style && style,
      primary && styles.bgPurple && styles.textWhite,
      secondary && styles.bgWhite && styles.textPurple,
    ]}
    onPress={onPress}
  >
    <Text
      style={[
        styles.text,
        primary && styles.textWhite,
        secondary && styles.textPurple,
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    shadowColor: "#866dc9",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 16.0,
    elevation: 16,
    borderRadius: 9999,
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
  },
  bgPurple: {
    backgroundColor: "#7041EE",
  },
  bgWhite: {
    backgroundColor: "#FFF",
  },
  textPurple: {
    color: "#7041EE",
  },
  textWhite: {
    color: "#FFF",
  },
  text: {
    fontSize: 24,
  },
});

export default SocialButton;
