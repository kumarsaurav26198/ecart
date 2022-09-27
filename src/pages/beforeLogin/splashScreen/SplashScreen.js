import { StyleSheet, ImageBackground, } from 'react-native';
import React from 'react';

export default function SplashScreen({ navigation }) {
    setTimeout(() => {
        navigation.replace('LogInScreen');
    }, 3000);
    return (
        <>
            <ImageBackground source={require("../../../assets/splash.png")} style={{ flex: 1, height: "100%", width: "100%" }} />
        </>
    );
}

const styles = StyleSheet.create({});