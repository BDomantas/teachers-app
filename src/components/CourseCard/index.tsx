import React from "react";
import {
  Text,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import _ from "lodash";

interface CourseCardProps {
  title: string;
  courseCount: number;
  image: ImageSourcePropType;
  id: string;
  onPress: any;
  width: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  courseCount,
  image,
  onPress,
  width,
}) => {
  const aspectRatio = _.random(80, 150);
  console.log(width, aspectRatio);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { height: width * 1.5 * (aspectRatio / 145), width },
      ]}
      onPress={onPress}
    >
      <ImageBackground
        source={image}
        style={styles.imageBackground}
        imageStyle={styles.imageBackgroundImage}
      >
        <Text style={styles.titleText}> {title} </Text>
        <Text style={styles.coursesText}> {courseCount} Courses </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  titleText: {
    fontSize: 18,
    color: "#0D1333",
  },
  coursesText: {
    fontSize: 14,
    color: "#8F95B3",
  },
  imageBackground: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
  },
  imageBackgroundImage: {
    borderRadius: 10,
  },
});

export default CourseCard;
