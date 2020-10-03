import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  ScrollView,
  Dimensions,
} from "react-native";
import CourseCard from "@Components/CourseCard";
import Input from "@Components/Input";

interface CourseListData {
  title: string;
  courseCount: number;
  id: string;
  image: ImageSourcePropType;
}

const MOCK_DATA: Array<CourseListData> = [
  {
    title: "Math",
    courseCount: 1,
    id: "Math",
    image: require("../../assets/images/courseCard1.png"),
  },
  {
    title: "English",
    courseCount: 2,
    id: "English",
    image: require("../../assets/images/courseCard2.png"),
  },
  {
    title: "Programming",
    courseCount: 3,
    id: "Programming",
    image: require("../../assets/images/courseCard3.png"),
  },
  {
    title: "Business",
    courseCount: 1,
    id: "Business",
    image: require("../../assets/images/courseCard4.png"),
  },
];

const { width: wWidth } = Dimensions.get("window");
// 24 is supposed to reference horizontal margin in HomeScreen.tsx
const cardWidth = (wWidth - 24 * 2 - 10) / 2;

const CourseList = () => {
  const onCourseCardPress = (id) => {
    console.log("Pressed on ", id);
  };

  const renderItems = (divider: number) => (list: Array<CourseListData>) =>
    list
      .filter((_, index) => index % 2 === divider)
      .map((item) => (
        <CourseCard
          {...item}
          width={cardWidth}
          key={item.id}
          onPress={() => onCourseCardPress(item.id)}
        />
      ));

  const renderLeft = renderItems(0);
  const renderRight = renderItems(1);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input placeholder={"Search"} />
      </View>
      <Text style={styles.listTitleText}>Courses</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollContentContainer}>
          <View style={styles.masonryRow}>{renderLeft(MOCK_DATA)}</View>
          <View style={styles.masonryRow}>{renderRight(MOCK_DATA)}</View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listTitleText: {
    color: "#0D1333",
    fontSize: 20,
    paddingBottom: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    paddingBottom: 48,
    paddingTop: 24,
  },
  masonryRow: {
    flex: 1,
    marginRight: 5,
  },
  scrollContentContainer: {
    flex: 1,
    flexDirection: "row",
  },
});

export default CourseList;
