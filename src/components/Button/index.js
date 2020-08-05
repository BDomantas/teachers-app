import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ onPress, title, style, primary, secondary }) => (
    <TouchableOpacity style={[styles.container, style, styles.primary, secondary && styles.secondary]}>
        <Text style={[styles.text, styles.primaryText, secondary && styles.secondaryText]}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
    container: {
        borderRadius: 24,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#866dc9',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowRadius: 16.00,
        elevation: 16,
    },
    primary: {
        backgroundColor: '#7041EE',
    },
    secondary: {
        backgroundColor: 'white',
    },
    primaryText: {
        color: 'white',
    },
    secondaryText: {
        color: '#7041EE',
    },
});

export default Button;

