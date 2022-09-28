import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../../../../components/common/Header';
import BannerContainer from '../../../../container/BannerContainer';
import CustomText from '../../../../components/common/CustomText';
import FavouriteContainer from '../../../../container/FavouriteContainer';
import ProductContainer from '../../../../container/ProductContainer';
import ProductRowContainer from '../../../../container/ProductRowContainer';

export default function Main() {
    return (
        <View style={{ flex: 1, overflow: 'hidden', marginBottom: 34 }}>
            <ScrollView nestedScrollEnabled={true}>
                <Header />
                <CustomText text=" All Banner" />
                <BannerContainer />
                <CustomText text="Favourite List" />
                <FavouriteContainer />
                <CustomText text=" Row Products" />
                <ProductRowContainer />
                <CustomText text="Product List" />
                <ProductContainer />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({});