import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  Image,
} from "react-native";

interface SocialButton {
  title: string;
  onPress: any;
  style?: any;
  icon: ImageSourcePropType;
}

const SocialButton: React.FC<SocialButton> = ({
  onPress,
  title,
  style,
  icon,
}) => (
  <TouchableOpacity style={[styles.button, style && style]} onPress={onPress}>
    <Image style={styles.icon} source={icon} />
    <View style={styles.textContainer}>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    shadowColor: "#866dc9",
    width: "100%",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 9999,
    paddingTop: 17,
    paddingBottom: 17,
    textAlign: "center",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingLeft: 20,
    marginBottom: 17,
  },
  icon: {
    height: 30,
    width: 30,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#4285F4",
    fontWeight: "700",
  },
});

export default SocialButton;
