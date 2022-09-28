import { StyleSheet, FlatList, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { Banner } from '../components/appComponent/Banner';
import { getProducts } from '../services/ProductsService';


export default function BannerContainer({ navigation }) {
    function renderProduct({ item: product }) {
        return (
            <View style={styles.bannerContainer}>
                <Banner
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
        <View>
            <FlatList
                style={styles.productsList}
                contentContainerStyle={styles.productsListContainer}
                keyExtractor={(item) => item.id.toString()}
                data={products}
                horizontal={true}
                renderItem={renderProduct}
            />
        </View>
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