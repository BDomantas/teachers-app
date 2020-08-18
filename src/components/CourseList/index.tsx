import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageSourcePropType } from 'react-native';
import CourseCard from '@Components/CourseCard';
import Input from '@Components/Input';

interface CourseListData {
    title: string;
    courseCount: number;
    id: string;
    image: ImageSourcePropType
}

const MOCK_DATA: Array<CourseListData> = [
    { title: "Math", courseCount: 1, id: "Math", image: require('../../assets/images/courseCard1.png') },
    { title: "English", courseCount: 2, id: "English", image: require('../../assets/images/courseCard2.png') },
    { title: "Programming", courseCount: 3, id: "Programming", image: require('../../assets/images/courseCard3.png')},
    { title: "Business", courseCount: 1, id: "Business", image: require('../../assets/images/courseCard4.png') }
]


const CourseList = () => {
    const onCourseCardPress = (id) => {
        console.log("Pressed on ", id);
    };
    const renderItem = ({ item, index }) => {
        return (
            <CourseCard {...item} index={index} onPress={() => onCourseCardPress(item.id)}/>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Input placeholder={'Search'} />
            </View>
            <Text style={styles.listTitleText}>Courses</Text>
            <FlatList
                numColumns={2}
                data={MOCK_DATA}
                keyExtractor={({ id }) => id}
                renderItem={renderItem}
            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listTitleText: {
        color: '#0D1333',
        fontSize: 20,
        paddingBottom: 24,
        fontWeight: 'bold'
    },
    inputContainer: {
        paddingBottom: 48,
        paddingTop: 24
    }
});

export default CourseList;
