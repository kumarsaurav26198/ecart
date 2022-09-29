import { StyleSheet, FlatList, View } from 'react-native';
import { useState, useEffect } from 'react';
import { getProducts } from '../services/ProductsService';
import { ProductRow } from '../components/appComponent/ProductRow';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/action/cartAction';
import { addItemToWishlist } from '../redux/action/wishlist';


export default function ProductRowContainer({ navigation }) {

    const dispatch = useDispatch();


    const items = useSelector(state => state.cartReducers.length);
    // console.warn(items);


    function renderProduct({ item: product }) {
        return (
            <ProductRow
                {...product}
                onAddToCart={x => {
                    dispatch(addItemToCart(product));
                }}
                onAddToWishlist={x => {
                    dispatch(addItemToWishlist(product));
                }}
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