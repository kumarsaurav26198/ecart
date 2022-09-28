import { StyleSheet, FlatList, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { getProducts } from '../services/ProductsService';
import { Favourite } from '../components/appComponent/Favourite';


export default function FavouriteContainer({ navigation }) {
    function renderProduct({ item: product }) {
        return (
            <View style={styles.bannerContainer}>
                <Favourite
                    {...product}
                // onPress={() => {
                //     navigation.navigate('ProductDetails', {
                //         productId: product.id,
                //     });
                // }}
                />
            </View>
        );
    }
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());
    }, []);

    return (
        <>
            <FlatList
                style={styles.productsList}
                contentContainerStyle={styles.productsListContainer}
                keyExtractor={(item) => item.id.toString()}
                data={products}
                horizontal={true}
                renderItem={renderProduct}
            />
        </>
    );
}

const styles = StyleSheet.create({

    productsListContainer: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginHorizontal: 8,
        marginVertical: 8,
    },
});