import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../../../components/common/Header';
import SearchInput from '../../../../components/common/SearchInput';

export default function Wishlist() {
    return (
        <>
            <View style={styles.container}>
                <Header />
                <SearchInput />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});