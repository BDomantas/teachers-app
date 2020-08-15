import React from 'react';
import { TextInput, StyleSheet} from 'react-native';

interface InputProps {
    onChangeText?: () => void;
    value?: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({ onChangeText, value, placeholder }) => {
    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#F5F5F7',
        borderRadius: 40,
        height: 60,
        paddingLeft: 16
    }
});

export default Input;
