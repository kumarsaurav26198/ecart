import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Header() {
    return (

        <View style={{
            width: "100%",
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderBottomWidth: 0.2,
            borderBottomColor: "#8e8e8e"
        }}>
            <Text style={{ fontWeight: "600", fontSize: 20, color: "#000", marginRight: 290 }}>E Cart</Text>

            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: 50, height: 30 }}>
                <Text>Mode</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({});