import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, title, bgColor, textColor }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{
            backgroundColor: bgColor,
            width: "80%",
            height: 50,
            borderRadius: 50,
            marginTop: 35,
            justifyContent: "center",
            alignItem: "center",

        }}>
            <Text style={{
                color: textColor,
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "fantasy",
                textAlign: "center",
            }}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;

