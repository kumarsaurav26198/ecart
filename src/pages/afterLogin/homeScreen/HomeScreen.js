import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Main from '../dashboard/bottom/Main';
import Search from '../dashboard/bottom/Search';
import Cart from '../dashboard/bottom/Cart';
import Wishlist from '../dashboard/bottom/Wishlist';
import Profile from '../dashboard/bottom/Profile';

export default function HomeScreen() {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <>
            <View style={{ flex: 1 }}>
                {selectedTab == 0 ? (<Main />) : selectedTab == 1 ? (<Search />) : selectedTab == 2 ? (<Cart />) : selectedTab == 3 ? (<Wishlist />) : (<Profile />)}
                <View style={styles.bottomContainer}>

                    <TouchableOpacity style={styles.bottomTab}
                        onPress={() => {
                            setSelectedTab(0);
                        }}
                    >
                        <Image source={require("../../../assets/images/home.png")} style={{
                            width: 24, height: 24,
                            tintColor: selectedTab == 0 ? "#000" : "#8e8e8e"
                        }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomTab}
                        onPress={() => {
                            setSelectedTab(1);
                        }}
                    >
                        <Image source={require("../../../assets/images/search2.png")} style={{
                            width: 24, height: 24,
                            tintColor: selectedTab == 1 ? "#000" : "#8e8e8e"

                        }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: 50, height: 50, justifyContent: "center", alignItems: "center", backgroundColor: selectedTab == 2 ? "green" : "#000", borderRadius: 25
                    }}
                        onPress={() => {
                            setSelectedTab(2);
                        }}
                    >
                        <Image source={require("../../../assets/images/bag.png")} style={{ width: 24, height: 24, tintColor: "#fff" }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomTab}
                        onPress={() => {
                            setSelectedTab(3);
                        }}
                    >
                        <Image source={require("../../../assets/images/heart.png")} style={{
                            width: 24, height: 24,
                            tintColor: selectedTab == 3 ? "#000" : "#8e8e8e"
                        }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomTab}
                        onPress={() => {
                            setSelectedTab(4);
                        }}
                    >
                        <Image source={require("../../../assets/images/user.png")} style={{
                            width: 24, height: 24,
                            tintColor: selectedTab == 4 ? "#000" : "#8e8e8e"
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 70,
        flexDirection: "row",
        backgroundColor: "#f2f2f2",
        elevation: 9
    },
    bottomTab: {
        width: "20%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

});