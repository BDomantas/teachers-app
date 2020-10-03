import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

import CourseList from "@Components/CourseList";

interface HomeScreenProps {
  userName: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ userName = "Alex" }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Labas {userName}, </Text>
        <Text style={styles.subtitleText}>Pasirink ką nori išmokti </Text>
      </View>
      <View style={{ flex: 1 }}>
        <CourseList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    flex: 1,
  },
  headingText: {
    fontSize: 28,
  },
  subtitleText: {
    paddingTop: 16,
    fontSize: 24,
    color: "#61688B",
  },
  headingContainer: {
    justifyContent: "flex-start",
    paddingTop: 60,
    flexShrink: 1,
    paddingBottom: 24,
  },
});

export default HomeScreen;
