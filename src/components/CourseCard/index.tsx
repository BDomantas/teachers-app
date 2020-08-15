import React from 'react';
import { Text, ImageBackground, ImageSourcePropType, StyleSheet, TouchableOpacity } from 'react-native';

interface CourseCardProps {
    title: string;
    courseCount: number;
    image: ImageSourcePropType;
    id: string;
    onPress: any;
    index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, courseCount, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.container } onPress={onPress}>
            <ImageBackground
                source={image}
                style={[styles.image ]}
                imageStyle={{borderRadius: 10}}
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
        backgroundColor: 'transparent',
    },
    titleText: {
        fontSize: 18,
        color: '#0D1333'
    },
    coursesText: {
        fontSize: 14,
        color: '#8F95B3',
    },
    image: {
        flex: 1,
        padding: 15,
        margin: 5,
        aspectRatio: 0.71/1
    }
});

export default CourseCard;
