import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

export function ProductRow({ name, price, image, onAddToCart, onAddToWishlist }) {

    return (
        <View style={styles.card}>
            <Image style={styles.thumb} source={image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.cartContainer}>
                    <Text style={styles.price}>Rs.. {price} ₹</Text>
                    <TouchableOpacity style={styles.addToCart} onPress={onAddToCart}>
                        <Text>Add cart</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={onAddToWishlist} style={styles.heartIcon}>
                    <Image
                        style={{ height: 24, width: 24 }}
                        source={require('../../assets/images/heart.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        // height: 260,
        width: '47%',
        backgroundColor: 'white',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        marginVertical: 15,
        marginHorizontal: 5,
    },
    thumb: {
        height: 160,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: '100%',
    },
    infoContainer: {
        padding: 16,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    cartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingRight: 10,
    },
    addToCart: {
        marginTop: 5,
        borderWidth: 0.2,
        padding: 5,
        borderRadius: 15,
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    heartIcon: {
        height: 40,
        width: 40,
        elevation: 8,
        borderRadius: 20,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        top: -155,
        right: 2,
    },
});
