import { StyleSheet, FlatList, View } from 'react-native';
import { useState, useEffect } from 'react';
import { getProducts } from '../services/ProductsService';
import { ProductRow } from '../components/appComponent/ProductRow';


export default function ProductRowContainer({ navigation }) {
    function renderProduct({ item: product }) {
        return (
            <ProductRow
                {...product}
            // onPress={() => {
            //     navigation.navigate('ProductDetails', {
            //         productId: product.id,
            //     });
            // }}
            />
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
                renderItem={renderProduct}
                numColumns={2}
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